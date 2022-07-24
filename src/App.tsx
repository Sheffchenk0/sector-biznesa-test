import React, { Suspense, useEffect, useState } from 'react';
// import { Route, Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import { TablePage } from 'pages/TablePage';
import { PAGES } from 'lib/consts';
function App() {
  return (
    <Suspense fallback="loading">
      <Routes>
        <Route path={PAGES.TABLE} element={<TablePage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
