describe('Registro Prestashop', function() {
    it('Ingresar formulario pagina de registro', function() {
        cy.visit('http://ec2-18-222-141-129.us-east-2.compute.amazonaws.com:8080/es/')
        cy.contains('Iniciar sesión').click()
        cy.get('.login-form').find('input[name="email"]').click().type("prueba@prueba.com")
        cy.get('.login-form').find('input[name="password"]').click().type("12345678")
        cy.get('.login-form').contains('Iniciar sesión').click()
        cy.contains('Cerrar sesión').click()
        cy.contains('Iniciar sesión con su cuenta')
    })
})