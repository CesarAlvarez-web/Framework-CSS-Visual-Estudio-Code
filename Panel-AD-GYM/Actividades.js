document.getElementById('formActividad').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Actividad registrada correctamente');
    });

    function updateDateTime() {
      const now = new Date();
      document.getElementById('datetime').textContent = now.toLocaleString();
    }
    setInterval(updateDateTime, 1000);
    updateDateTime();