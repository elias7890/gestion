import React, { useState } from 'react';

const ListaTrabajadores = () => {
  const [search, setSearch] = useState('');
  const [modal, setModal] = useState(null);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const openModal = (modalId) => {
    setModal(modalId);
  };

  const closeModal = () => {
    setModal(null);
  };

  return (
    <div>
      <h2>Lista de Trabajadores</h2>
      <div className="search-container">
        <label htmlFor="search">Buscar por RUT:</label>
        <input
          type="text"
          id="search"
          value={search}
          onChange={handleSearch}
          placeholder="Ingrese RUT"
        />
      </div>

      <table id="workerTable">
        <thead>
          <tr>
            <th>RUT</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Cargo</th>
            <th>Tipo de Contrato</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12.345.678-9</td>
            <td>Juan</td>
            <td>Pérez</td>
            <td>juan.perez.com</td>
            <td>Desarrollador</td>
            <td>Indefinido</td>
            <td>
              <button onClick={() => openModal('viewDocuments')}>Ver Documentos</button>
              <button onClick={() => openModal('uploadDocuments')}>Cargar Documentos</button>
            </td>
          </tr>
        </tbody>
      </table>

      {modal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            {modal === 'viewDocuments' && (
              <>
                <h3>Documentos del Trabajador</h3>
                <p>Aquí se mostrarán los documentos cargados...</p>
              </>
            )}
            {modal === 'uploadDocuments' && (
              <>
                <h3>Cargar Nuevo Documento</h3>
                <form>
                  <label htmlFor="file">Seleccionar archivo:</label>
                  <input type="file" id="file" name="file" />
                  <button type="submit" style={{ marginTop: '10px' }}>Cargar</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListaTrabajadores;
