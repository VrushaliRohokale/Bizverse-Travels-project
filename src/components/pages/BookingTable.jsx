import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Sidebar } from 'primereact/sidebar';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import axios from 'axios';

const BookingTable = () => {
    const [users, setUsers] = useState([]);
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        bookingOption: '',
        status: 'Pending',
    });
    const [formErrors, setFormErrors] = useState({});
    const [editingUserId, setEditingUserId] = useState(null);
    const toast = useRef(null);

    const bookingOptions = ['Travel', 'Hotel', 'Restaurant', 'Villa', 'Insurance', 'Cab'];
    const statuses = ['Pending', 'Confirmed', 'Cancelled'];

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                const formattedData = response.data.map((user, index) => ({
                    id: user.id,
                    srNo: index + 1,
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    bookingOption: bookingOptions[index % bookingOptions.length],
                    status: statuses[0], // Default to "Pending"
                }));
                setUsers(formattedData);
            } catch (error) {
                toast.current.show({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 });
            }
        };

        fetchUsers();
    }, []);

    const validate = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Name is required.';
        if (!formData.email) {
            errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Invalid email format.';
        }
        if (!formData.phone) errors.phone = 'Phone number is required.';
        if (!formData.bookingOption) errors.bookingOption = 'Booking option is required.';
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const openNew = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            bookingOption: '',
            status: 'Pending',
        });
        setEditingUserId(null);
        setSidebarVisible(true);
    };

    const saveUser = () => {
        if (!validate()) return;

        if (editingUserId) {
            const updatedUsers = users.map((user) =>
                user.id === editingUserId ? { ...user, ...formData } : user
            );
            setUsers(updatedUsers);
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Booking Updated', life: 3000 });
        } else {
            const newUser = {
                ...formData,
                id: users.length + 1,
                srNo: users.length + 1,
            };
            setUsers([...users, newUser]);
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Booking Created', life: 3000 });
        }
        setSidebarVisible(false);
    };

    const confirmDelete = (id) => {
        confirmDialog({
            message: 'Are you sure you want to delete this booking?',
            header: 'Delete Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => deleteUser(id),
            reject: () => toast.current.show({ severity: 'info', summary: 'Cancelled', detail: 'Delete Cancelled', life: 3000 })
        });
    };

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Booking Deleted', life: 3000 });
    };

    const editUser = (user) => {
        setEditingUserId(user.id);
        setFormData({
            name: user.name,
            email: user.email,
            phone: user.phone,
            bookingOption: user.bookingOption,
            status: user.status,
        });
        setSidebarVisible(true);
    };

    return (
        <div className="card">
            <Toast ref={toast}/>
            <ConfirmDialog /> 

            <div className="flex justify-content-between align-items-center mb-4">
                <h1 className="text-4xl">Booking Management</h1>
                <Button label="Add Booking" icon="pi pi-plus" className="ml-auto" onClick={openNew} style={{ float: 'right' }} />
            </div>

            <DataTable
                value={users}
                dataKey="id"
                tableStyle={{ minWidth: '60rem' }}
            >
                <Column field="srNo" header="Sr No." style={{ width: '5%' }} />
                <Column field="name" header="Name" sortable />
                <Column field="email" header="Email" sortable />
                <Column field="phone" header="Phone" sortable />
                <Column field="bookingOption" header="Booking Option" sortable />
                <Column field="status" header="Status" sortable />
                <Column
                    header="Actions"
                    body={(rowData) => (
                        <div className="flex gap-2">
                            <Button icon="pi pi-pencil" className="p-button-rounded p-button-warning" onClick={() => editUser(rowData)} />
                            <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={() => confirmDelete(rowData.id)} />
                        </div>
                    )}
                />
            </DataTable>

            <Sidebar visible={sidebarVisible} position="right" onHide={() => setSidebarVisible(false)} style={{ width: '25rem', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', padding: '1rem' }}>
                <h3>{editingUserId ? 'Edit Booking' : 'Add Booking'}</h3>
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <InputText style={{ margin: '10px' }}
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        autoFocus
                    />
                    {formErrors.name && <small className="p-error">{formErrors.name}</small>}
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <InputText style={{ margin: '10px' }}
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                    {formErrors.email && <small className="p-error">{formErrors.email}</small>}
                </div>
                <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <InputText style={{ margin: '10px' }}
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    {formErrors.phone && <small className="p-error">{formErrors.phone}</small>}
                </div>
                <div className="field">
                    <label htmlFor="bookingOption">Booking Option</label>
                    <Dropdown style={{ margin: '10px' }}
                        id="bookingOption"
                        value={formData.bookingOption}
                        options={bookingOptions}
                        onChange={(e) => setFormData({ ...formData, bookingOption: e.value })}
                        placeholder="Select option"
                    />
                    {formErrors.bookingOption && <small className="p-error">{formErrors.bookingOption}</small>}
                </div>
                <div className="field">
                    <label htmlFor="status">Status</label>
                    <Dropdown style={{ margin: '10px' }}
                        id="status"
                        value={formData.status}
                        options={statuses}
                        onChange={(e) => setFormData({ ...formData, status: e.value })}
                        placeholder="Select a status"
                    />
                </div>
                <div className="mt-3 flex justify-content-end">
                    <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={() => setSidebarVisible(false)} />
                    <Button label="Save" icon="pi pi-check" onClick={saveUser} />
                </div>
            </Sidebar>

            <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '5rem',
                marginBottom: '3rem'
                }}>
                    <Button label="Process" className=" border rounded-3xl border-black" />
                    </div>

        </div>
    );
};

export default BookingTable;
