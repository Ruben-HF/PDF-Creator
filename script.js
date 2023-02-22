
function generarPdf() {
    
    let name = document.getElementById("name").value;
    let fecha = new Date().toLocaleDateString();
  
    let contenido = `
      <html>
        <head>
          <style>
            body {
              line-height: 1.5;
              text-align: justify;
            }
            .logo {
              width: 200px;
              margin-bottom: 20px;
            }
            .fecha {
              float: right;
            }
            .footer {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              text-align: center;
              margin-bottom: 10px;
            }
          </style>
        </head>
        <body>
          <img src="https://www.gabssa.com.mx/img/gabssa_logo.png" alt="Logo de GRUPO GABSSA" class="logo">
          <span class="fecha">Fecha: ${fecha}</span>
          <br>
          <p>Buen día, ${name}.</p>
          <p>Por medio de la presente la agencia de soluciones GRUPO GABSSA, nos comprometemos a enviarle a usted ${name} el acuerdo de pago en las próximas horas. Esto con la finalidad de que pueda completar su pago conforme a la promesa generada con nuestra agencia de soluciones.</p>
          <br>
          <p>Sin más por el momento, agradecemos su amable tiempo para la generación de su Acuerdo de Pago.</p>
          <br>
          <p>De antemano agradecemos sus atenciones BBVA.</p>
          <div class="footer">
            <p>Agencia de soluciones Grupo GABSSA.</p>
          </div>
          
        </body>
      </html>
    `;
  
    let ventana = window.open("", "", "width=700,height=700");
    ventana.document.write(contenido);
    ventana.document.close();
    ventana.focus();
    ventana.print();
    ventana.close();

}


function verCarta() {
  let name = document.getElementById("name").value;
  let fecha = new Date().toLocaleDateString();
  let uuid = generarUUID(); // Generar UUID de folio
  let here = document.querySelector('#here');
  here.innerHTML = `
    <html>
      <head>
        <style>
          body {
            line-height: 1.5;
            text-align: justify;
          }
          .logo {
            width: 200px;
            margin-bottom: 20px;
          }
          .fecha {
            float: right;
          }
          .footer {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: center;
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body>
        <img src="https://www.gabssa.com.mx/img/gabssa_logo.png" alt="Logo de GRUPO GABSSA" class="logo">
        <span class="fecha">Fecha: ${fecha}</span>
        <br>
        <p>Buen día, ${name}.</p>
        <p>Por medio de la presente la agencia de soluciones GRUPO GABSSA, nos comprometemos a enviarle a usted ${name} el acuerdo de pago en las próximas horas. Esto con la finalidad de que pueda completar su pago conforme a la promesa generada con nuestra agencia de soluciones.</p>
        <br>
        <p>Sin más por el momento, agradecemos su amable tiempo para la generación de su Acuerdo de Pago.</p>
        <br>
        <p>De antemano agradecemos sus atenciones BBVA.</p>
        <div>
          <p>Agencia de soluciones Grupo GABSSA.</p>
        </div>
        <br>
        <p>UUID de folio: ${uuid}</p>
      </body>
    </html>
  `;
}

function generarUUID() {
  return crypto.randomUUID();
}

  