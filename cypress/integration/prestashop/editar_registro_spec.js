const email = "correo@uniandes.edu.co", password = "12345678";
const nombres = 'Armando', apellidos = 'Acosta Guerrero', fecha = "17/12/1987";
const nombrealterno = 'Alexander', apellidosalternos = 'Lopez Sanchez';
const emailalterno = "correoalterno@uniandes.edu.co", passwordalterno = '87654321', fechaalterna = '01/07/1989'
const url = 'http://ec2-18-222-141-129.us-east-2.compute.amazonaws.com:8080/es/';

describe('Edición Registro Usuario', function() {
    it('Ingresar formulario de edición del registro de usuario', function() {
        cy.visit(url)
        cy.contains('Iniciar sesión').click()
        cy.get('.login-form').find('input[name="email"]').click().type(emailalterno)
        cy.get('.login-form').find('input[name="password"]').click().type(passwordalterno)
        cy.get('.login-form').contains('Iniciar sesión').click()
        cy.get('div.links').contains('Información').click()
        cy.get('form#customer-form').find('input[name="firstname"]').clear().type(nombres)
        cy.get('form#customer-form').find('input[name="lastname"]').clear().type(apellidos)
        cy.get('form#customer-form').find('input[name="email"]').clear().type(email)
        cy.get('form#customer-form').find('input[name="password"]').type(passwordalterno)
        cy.get('form#customer-form').find('input[name="new_password"]').type(password)
        cy.get('form#customer-form').find('input[name="birthday"]').clear().type(fecha)
        cy.contains('Guardar').click()
        cy.contains('Cerrar sesión').click()
        
    })
})