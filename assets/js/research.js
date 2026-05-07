  document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.querySelector('.research-table tbody');
    const lengthSelect = document.getElementById('researchLength');
    const info = document.getElementById('researchTableInfo');
    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'research-table-pagination';
    tableBody.parentElement.insertAdjacentElement('afterend', paginationContainer);

    const rows = Array.from(tableBody.querySelectorAll('tr'));
    let filteredRows = rows.slice();
    let currentPage = 1;
    let rowsPerPage = parseInt(lengthSelect.value, 10) || 10;

    function updateInfo(start, end, total) {
      info.textContent = total === 0
        ? 'No matching records found'
        : `Showing ${start} to ${end} of ${total} entries`;
    }

    function renderTable() {
      const start = (currentPage - 1) * rowsPerPage;
      const end = start + rowsPerPage;
      filteredRows.forEach((row, index) => {
        row.style.display = index >= start && index < end ? '' : 'none';
      });
      updateInfo(Math.min(start + 1, filteredRows.length), Math.min(end, filteredRows.length), filteredRows.length);
      renderPagination();
    }

    function renderPagination() {
      paginationContainer.innerHTML = '';
      const pageCount = Math.max(1, Math.ceil(filteredRows.length / rowsPerPage));
      const createButton = (text, page, disabled) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = text;
        button.disabled = disabled;
        if (page !== null) {
          button.addEventListener('click', () => {
            currentPage = page;
            renderTable();
          });
        }
        return button;
      };

      paginationContainer.appendChild(createButton('Previous', Math.max(1, currentPage - 1), currentPage === 1));

      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(pageCount, currentPage + 2);

      for (let i = startPage; i <= endPage; i += 1) {
        const button = createButton(i, i, false);
        if (i === currentPage) {
          button.classList.add('active');
        }
        paginationContainer.appendChild(button);
      }

      paginationContainer.appendChild(createButton('Next', Math.min(pageCount, currentPage + 1), currentPage === pageCount));
    }

    function applyFilter() {
      filteredRows = rows.filter(row => row.textContent.toLowerCase().includes(query));
      currentPage = 1;
      renderTable();
    }

    lengthSelect.addEventListener('change', () => {
      rowsPerPage = parseInt(lengthSelect.value, 10) || 10;
      currentPage = 1;
      renderTable();
    });

    renderTable();
  });