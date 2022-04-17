it('открыть сайт', () => {
    cy.visit('https://finance.dev.fabrique.studio/accounts/login/', {
        auth: {
            username: 'fabrique',
            password: 'fabrique'
        }
    });

});
it('Логин почты', () => {
    cy.get('div.auth-layout__content input[type="email"]')
    .type('admin@admin.ad');
});
it('Пароль', () => {
    cy.get('div.auth-layout__content input[type="password"]')
    .type('admin');
});
it('Жмем кнопку "Далее"', () => {
    cy.get('.button')
    .click();
});
it('Нажимаем кнопку "Добавить платеж +"', () => {
    cy.get('.pageLayout__actions > :nth-child(1) > .button')
    .click();
});
it('Нажимаем переключатель "Расход"', () => {
    cy.get('[data-field-name="operation"] > [style="display: flex; align-items: flex-start;"] > [style="padding-left: 20px; flex-grow: 1; padding-top: 0px; position: relative; margin-top: 0px; width: 100%; max-width: unset;"] > [style="display: flex; align-items: center;"] > [style="margin-top: -12px; margin-bottom: -12px; flex-grow: 1; width: 100%;"] > [data-v-3178dd4a=""] > :nth-child(1) > .radio-group > .radio-group__content > :nth-child(2) > .form-field__field > .checkbox > .checkbox__content > .checkbox__label')
    .click();
});
it('Пишем в поле "Описание"', () => {
    cy.get('[data-field-name="description"] > [style="display: flex; align-items: flex-start;"] > [style="padding-left: 20px; flex-grow: 1; padding-top: 0px; position: relative; margin-top: 0px; width: 100%; max-width: unset;"] > [style="display: flex; align-items: center;"] > [style="flex-grow: 1; width: 100%;"] > .form-field > .form-field__field > .input')
    .type('Тестовое описание2');
});
it('Поле "Статус". Нажимаем кнопку "Активен"', () => {
    cy.get('[data-field-name="statuses"] > [style="display: flex; align-items: flex-start;"] > [style="padding-left: 20px; flex-grow: 1; padding-top: 0px; position: relative; margin-top: 0px; width: 100%; max-width: unset;"] > [data-v-3178dd4a=""][style="display: flex; align-items: center;"] > [style="margin-top: -12px; margin-bottom: -12px; flex-grow: 1; width: 100%;"] > [data-v-3178dd4a=""] > :nth-child(1) > .radio-group > .radio-group__content > .radio-group__checkbox--first > .form-field__field > .checkbox > .checkbox__content')
    .click();
});
it('Поле "Статус". Нажимаем кнопку "Проверен"', () => {
    cy.get('.radio-group__checkbox--last > .form-field__field > .checkbox > .checkbox__content > .checkbox__icon > [style="display: flex; align-items: center;"] > .icon')
    .click();
});
it('Пишем в поле "Сумма план"', () => {
    cy.get('[data-field-name="amount_plan"] > [style="display: flex; align-items: flex-start;"] > [style="padding-left: 20px; flex-grow: 1; padding-top: 0px; position: relative; margin-top: 0px; width: 100%; max-width: unset;"] > [style="display: flex; align-items: center;"] > [style="flex-grow: 1; width: 100%;"] > .form-field > .form-field__field > .input')
    .type('100000');
});
it('Пишем в поле "Сумма факт"', () => {
    cy.get('[data-field-name="amount_fact"] > [style="display: flex; align-items: flex-start;"] > [style="padding-left: 20px; flex-grow: 1; padding-top: 0px; position: relative; margin-top: 0px; width: 100%; max-width: unset;"] > [style="display: flex; align-items: center;"] > [style="flex-grow: 1; width: 100%;"] > .form-field > .form-field__field > .input > .input__content > .input__input')
    .type('45000');
});
it('Поле "Статус оплаты". Нажимаем кнопку "Оплачен"', () => {
    cy.get('[data-field-name="status"] > [style="display: flex; align-items: flex-start;"] > [style="padding-left: 20px; flex-grow: 1; padding-top: 0px; position: relative; margin-top: 0px; width: 100%; max-width: unset;"] > [style="display: flex; align-items: center;"] > [style="margin-top: -12px; margin-bottom: -12px; flex-grow: 1; width: 100%;"] > [data-v-3178dd4a=""] > :nth-child(1) > .radio-group > .radio-group__content > :nth-child(2) > .form-field__field > .checkbox > .checkbox__content > .checkbox__label')
    .click();
});
it('Поле "Дата план". Нажимаем на поле для выбора даты"', () => {
    cy.get('[data-field-name="date_plan"] > [style="display: flex; align-items: flex-start;"] > [style="padding-left: 20px; flex-grow: 1; padding-top: 0px; position: relative; margin-top: 0px; width: 100%; max-width: unset;"] > [data-v-3178dd4a=""][style="display: flex; align-items: center;"] > [style="flex-grow: 1; width: 100%;"] > .form-field > .form-field__field > .date')
    .click();
});
it('Поле "Дата план". Нажимаем на "Сегодня"', () => {
    cy.get("body > div.dp-below.dp-is-below > div > div > footer > button.dp-today").click();
});
it('Поле "Дата факт". Нажимаем на поле для выбора даты"', () => {
    cy.get('[data-field-name="date_fact"] > [style="display: flex; align-items: flex-start;"] > [style="padding-left: 20px; flex-grow: 1; padding-top: 0px; position: relative; margin-top: 0px; width: 100%; max-width: unset;"] > [data-v-3178dd4a=""][style="display: flex; align-items: center;"] > [style="flex-grow: 1; width: 100%;"] > .form-field > .form-field__field > .date > .date__content > .date__input')
    .click();
});
it('Поле "Дата факт". Нажимаем на "Сегодня"', () => {
    cy.get("body > div.dp-below.dp-is-below > div > div > footer > button.dp-today")
    .click();
});
it('Поле "Статья расходов". Нажимаем на поле', () => {
    cy.get('[data-field-name="category"] > [style="display: flex; align-items: flex-start;"] > [style="padding-left: 20px; flex-grow: 1; padding-top: 0px; position: relative; margin-top: 0px; width: 100%; max-width: unset;"] > [data-v-3178dd4a=""][style="display: flex; align-items: center;"] > [style="flex-grow: 1; width: 100%;"] > .form-field > .form-field__field > .select > .multiselect > .multiselect__tags')
//    .type('уменьшаемый тест1{enter}');
.type('Игорь{enter}');
});
it('Поле "Юридическое лицо". Печатаем и нажимаем энтер', () => {
cy.get('[data-field-name="company_own"] > [style="display: flex; align-items: flex-start;"] > [style="padding-left: 20px; flex-grow: 1; padding-top: 0px; position: relative; margin-top: 0px; width: 100%; max-width: unset;"] > [data-v-3178dd4a=""][style="display: flex; align-items: center;"] > [style="flex-grow: 1; width: 100%;"] > .form-field > .form-field__field > .select > .multiselect > .multiselect__tags')
.type('ООО ТЕСТ{Enter}');
});
it('Поле "Контрагент". Печатаем и нажимаем энтер', () => {
    cy.get('[data-field-name="company_client"] > [style="display: flex; align-items: flex-start;"] > [style="padding-left: 20px; flex-grow: 1; padding-top: 0px; position: relative; margin-top: 0px; width: 100%; max-width: unset;"] > [data-v-3178dd4a=""][style="display: flex; align-items: center;"] > [style="flex-grow: 1; width: 100%;"] > .form-field > .form-field__field > .select > .multiselect > .multiselect__tags > .multiselect__placeholder')
    .type('Тестовый контрагент{Enter}');
});
it('Поле "Теги". Печатаем и нажимаем энтер', () => {
cy.get('[data-field-name="tags"] > [style="display: flex; align-items: flex-start;"] > [style="padding-left: 20px; flex-grow: 1; padding-top: 0px; position: relative; margin-top: 0px; width: 100%; max-width: unset;"] > [data-v-3178dd4a=""][style="display: flex; align-items: center;"] > [style="flex-grow: 1; width: 100%;"] > .form-field > .form-field__field > .select > .multiselect > .multiselect__tags')
.type('тест{Enter}');
});
it('Поле "Теги". Печатаем и нажимаем энтер', () => {
    cy.get('[data-field-name="tags"] > [style="display: flex; align-items: flex-start;"] > [style="padding-left: 20px; flex-grow: 1; padding-top: 0px; position: relative; margin-top: 0px; width: 100%; max-width: unset;"] > [data-v-3178dd4a=""][style="display: flex; align-items: center;"] > [style="flex-grow: 1; width: 100%;"] > .form-field > .form-field__field > .select > .multiselect > .multiselect__tags')
    .type('тест{downarrow}{Enter}');
});
it('Нажимаем на кнопку "Добавить"', () => {
    cy.get('.widget__footer > :nth-child(1) > .button--state-filled')
    .click();
});
it('Проверяем, что появилось уведомление, что "Платеж успешно сохранен"', () => {
cy.contains('Платеж успе').should('be.visible');
cy.wait(100)
});

it('Переходим в "Платежи"', () => {
cy.get(':nth-child(1) > .side__link')
.click();
cy.wait(100)
});

it('Нажимаем на поле поиска платежей', () => {
cy.get('.input')
.type('Игорь{Enter}{Enter}{Enter}');
});
it('Проверяем, что статья есть на странице', () => {
    cy.contains('45 000').should('be.visible');
});
