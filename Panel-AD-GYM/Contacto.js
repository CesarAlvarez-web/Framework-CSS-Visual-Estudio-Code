
    document.getElementById('formContacto').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Mensaje enviado correctamente');
    });

    function updateDateTime() {
      const now = new Date();
      document.getElementById('datetime').textContent = now.toLocaleString();
    }
    setInterval(updateDateTime, 1000);
    updateDateTime();