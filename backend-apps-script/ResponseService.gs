/**
 * Response Service - Helper functions for creating API responses
 * and handling contact form submissions
 */

function createResponse(status, message, data) {
  var response = {
    status: status,
    message: message,
    timestamp: new Date().toISOString()
  };

  if (data !== null && data !== undefined) {
    response.data = data;
  }

  return response;
}

function getServices() {
  var services = [
    {
      id: 'cortes',
      name: 'Cortes',
      description: 'Cortes personalizados que reflejan tu estilo único.',
      services: [
        {
          id: 'corte-mujer',
          name: 'Corte Mujer',
          description: 'Corte personalizado con lavado y styling incluido',
          price: 3500,
          duration: '45 min',
          category: 'cortes'
        },
        {
          id: 'corte-hombre',
          name: 'Corte Hombre',
          description: 'Corte clásico o moderno con acabado perfecto',
          price: 2500,
          duration: '30 min',
          category: 'cortes'
        },
        {
          id: 'corte-nino',
          name: 'Corte Niño/a',
          description: 'Corte divertido y profesional para los más pequeños',
          price: 2000,
          duration: '30 min',
          category: 'cortes'
        },
        {
          id: 'brushing',
          name: 'Brushing',
          description: 'Secado y peinado profesional para cualquier ocasión',
          price: 2000,
          duration: '30 min',
          category: 'cortes'
        }
      ]
    },
    {
      id: 'barba',
      name: 'Barba',
      description: 'Definición limpia y detalle superior para una presencia más firme.',
      services: [
        {
          id: 'barba-clasica',
          name: 'Barba Clásica',
          description: 'Definición limpia para una presencia más firme.',
          price: 2000,
          duration: '20 min',
          category: 'barba'
        },
        {
          id: 'barba-premium',
          name: 'Barba Premium',
          description: 'Detalle superior para una barba con carácter.',
          price: 3000,
          duration: '30 min',
          category: 'barba'
        }
      ]
    },
    {
      id: 'facial',
      name: 'Facial',
      description: 'Frescura y cuidado para una piel impecable.',
      services: [
        {
          id: 'limpieza-facial',
          name: 'Limpieza Facial',
          description: 'Frescura y cuidado para una piel impecable.',
          price: 3000,
          duration: '30 min',
          category: 'facial'
        },
        {
          id: 'hidratacion',
          name: 'Hidratación Profunda',
          description: 'Tratamiento intensivo de hidratación y nutrición.',
          price: 5000,
          duration: '1 hr',
          category: 'facial'
        },
        {
          id: 'keratina',
          name: 'Keratina',
          description: 'Alisado y brillo con tratamiento de keratina profesional.',
          price: 15000,
          duration: '2-3 hrs',
          category: 'facial'
        },
        {
          id: 'botox-capilar',
          name: 'Botox Capilar',
          description: 'Rejuvenecimiento y volumen para cabello dañado.',
          price: 8000,
          duration: '1.5 hrs',
          category: 'facial'
        }
      ]
    },
    {
      id: 'cabello',
      name: 'Cabello',
      description: 'Ondas, cepillados y color. Todo lo que necesitás para un look que resalte tu esencia.',
      services: [
        {
          id: 'color-completo',
          name: 'Color Completo',
          description: 'Tinte completo con productos de alta calidad',
          price: 8000,
          duration: '2 hrs',
          category: 'cabello'
        },
        {
          id: 'mechas',
          name: 'Mechas / Balayage',
          description: 'Mechas naturales o llamativas con técnica balayage',
          price: 12000,
          duration: '3 hrs',
          category: 'cabello'
        },
        {
          id: 'reflejos',
          name: 'Reflejos',
          description: 'Reflejos sutiles para dar dimensión y brillo',
          price: 9000,
          duration: '2.5 hrs',
          category: 'cabello'
        },
        {
          id: 'decoloracion',
          name: 'Decoloración',
          description: 'Aclarado profesional con cuidado del cabello',
          price: 10000,
          duration: '2-3 hrs',
          category: 'cabello'
        },
        {
          id: 'peinado-novia',
          name: 'Peinado de Novia',
          description: 'Look elegante para tu día especial con prueba incluida',
          price: 12000,
          duration: '1.5 hrs',
          category: 'cabello'
        },
        {
          id: 'peinado-fiesta',
          name: 'Peinado de Fiesta',
          description: 'Peinado elegante para eventos y celebraciones',
          price: 6000,
          duration: '1 hr',
          category: 'cabello'
        },
        {
          id: 'alaciado',
          name: 'Alaciado',
          description: 'Alaciado profesional con plancha y productos protectores',
          price: 4000,
          duration: '1 hr',
          category: 'cabello'
        }
      ]
    }
  ];

  var serviceImages = getServiceImages();

  for (var i = 0; i < services.length; i++) {
    for (var j = 0; j < services[i].services.length; j++) {
      var serviceId = services[i].services[j].id;
      services[i].services[j].image = serviceImages[serviceId] || null;
    }
  }

  return createResponse('success', 'Services fetched successfully', services);
}

function submitContactForm(data) {
  try {
    var name = data.name;
    var email = data.email;
    var phone = data.phone || '';
    var message = data.message;

    if (!name || !email || !message) {
      return createResponse('error', 'Missing required fields', null);
    }

    var sheet = getContactSheet();

    sheet.appendRow([
      new Date(),
      name,
      email,
      phone,
      message
    ]);

    return createResponse('success', 'Message sent successfully', null);
  } catch (error) {
    return createResponse('error', 'Error submitting form: ' + error.toString(), null);
  }
}

function getContactSheet() {
  var spreadsheet = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
  var sheet = spreadsheet.getSheetByName(CONFIG.CONTACT_SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(CONFIG.CONTACT_SHEET_NAME);
    sheet.appendRow(['Fecha', 'Nombre', 'Email', 'Teléfono', 'Mensaje']);
  }

  return sheet;
}
