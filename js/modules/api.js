/* ============================================================
   api.js — Ponto de extensao para integracoes futuras
   ------------------------------------------------------------
   Preparado para conectar um formulario de contato a um backend
   ou servico de email. Exemplo de uso seguro com fetch:

   App.enviarContato = function (dados) {
     return fetch('/api/contato', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(dados)
     }).then(function (r) {
       if (!r.ok) throw new Error('Falha ao enviar');
       return r.json();
     });
   };
   ============================================================ */
(function (App) {
  // Modulo reservado para expansao (formularios, agendamento, etc.)
})(window.App = window.App || {});
