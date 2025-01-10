import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { BreadCrumb } from 'primereact/breadcrumb'; 

const Services = () => {
  
  const serviceData = [
    { id: 1, name: 'Travelling Information', description: 'Get details about the best travel options, including flights, trains, and buses for your journey.' },
    { id: 2, name: 'Hotel Information', description: 'Discover top-rated hotels and accommodations that suit your needs and preferences.' },
    { id: 3, name: 'Resort Information', description: 'Learn about luxurious resorts offering world-class amenities for a perfect getaway.' },
    { id: 4, name: 'Villa Stay Information', description: 'Experience a private and luxurious stay with stunning villas in beautiful locations.' },
    { id: 5, name: 'Insurance Information', description: 'Stay protected during your travels with comprehensive insurance plans.' },
    { id: 6, name: 'Cabs Information', description: 'Find reliable cab services to make your travel comfortable and hassle-free.' },
  ];

  const [services] = useState(serviceData);

  
  const breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Services', url: '/services' },
  ];

  return (
    <div className="container mt-5">
      {/* Breadcrumbs */}
      <BreadCrumb model={breadcrumbItems} />

      {/* Table with PrimeReact Pagination */}
      <div className="card">
        <h5>Our Services</h5>
        <DataTable
          value={services}
          paginator
          rows={3} // Rows per page
        >
          <Column field="name" header="Service Name" />
          <Column field="description" header="Description" />
        </DataTable>
      </div>
    </div>
  );
};

export default Services;
