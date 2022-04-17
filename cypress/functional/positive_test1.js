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
it('Нажимаем кнопку переключателя "Перевод средств"', () => {
    cy.get('[data-field-name="operation"] > [style="display: flex; align-items: flex-start;"] > [style="padding-left: 20px; flex-grow: 1; padding-top: 0px; position: relative; margin-top: 0px; width: 100%; max-width: unset;"] > [style="display: flex; align-items: center;"] > [style="margin-top: -12px; margin-bottom: -12px; flex-grow: 1; width: 100%;"] > [data-v-3178dd4a=""] > :nth-child(1) > .radio-group > .radio-group__content > .radio-group__checkbox--last > .form-field__field > .checkbox > .checkbox__content > .checkbox__icon')
    .click();
});
it('Нажимаем кнопку переключателя "Доход/приход"', () => {
    cy.get('[data-field-name="operation"] > [style="display: flex; align-items: flex-start;"] > [style="padding-left: 20px; flex-grow: 1; padding-top: 0px; position: relative; margin-top: 0px; width: 100%; max-width: unset;"] > [style="display: flex; align-items: center;"] > [style="margin-top: -12px; margin-bottom: -12px; flex-grow: 1; width: 100%;"] > [data-v-3178dd4a=""] > :nth-child(1) > .radio-group > .radio-group__content > .radio-group__checkbox--first > .form-field__field > .checkbox > .checkbox__content')
    .click();
});
it('Пишем в поле "Описание"', () => {
    cy.get('[data-field-name="description"] > [style="display: flex; align-items: flex-start;"] > [style="padding-left: 20px; flex-grow: 1; padding-top: 0px; position: relative; margin-top: 0px; width: 100%; max-width: unset;"] > [style="display: flex; align-items: center;"] > [style="flex-grow: 1; width: 100%;"] > .form-field > .form-field__field > .input')
    .type('Тестовое описание1');
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
    .type('999');
});
it('Пишем в поле "Сумма факт"', () => {
    cy.get('[data-field-name="amount_fact"] > [style="display: flex; align-items: flex-start;"] > [style="padding-left: 20px; flex-grow: 1; padding-top: 0px; position: relative; margin-top: 0px; width: 100%; max-width: unset;"] > [style="display: flex; align-items: center;"] > [style="flex-grow: 1; width: 100%;"] > .form-field > .form-field__field > .input > .input__content > .input__input')
    .type('66544');
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
it('Поле "Источник". Нажимаем на поле', () => {
    cy.get('[data-field-name="source"] > [style="display: flex; align-items: flex-start;"] > [style="padding-left: 20px; flex-grow: 1; padding-top: 0px; position: relative; margin-top: 0px; width: 100%; max-width: unset;"] > [data-v-3178dd4a=""][style="display: flex; align-items: center;"] > [style="flex-grow: 1; width: 100%;"] > .form-field > .form-field__field > .select > .multiselect > .multiselect__tags > .multiselect__placeholder')
    .type('test');
});
it('Поле "Источник". Выбираем и нажимаем', () => {
    cy.get('[data-field-name="source"] > [style="display: flex; align-items: flex-start;"] > [style="padding-left: 20px; flex-grow: 1; padding-top: 0px; position: relative; margin-top: 0px; width: 100%; max-width: unset;"] > [data-v-3178dd4a=""][style="display: flex; align-items: center;"] > [style="flex-grow: 1; width: 100%;"] > .form-field > .form-field__field > .select > .multiselect > .multiselect__content-wrapper > .multiselect__content > :nth-child(2) > .multiselect__option')
    .click();
});
it('Поле "Статус оплаты". Нажимаем кнопку "Оплачен"', () => {
    cy.get('[data-field-name="source_additional_id"] > [style="display: flex; align-items: flex-start;"] > [style="padding-left: 20px; flex-grow: 1; padding-top: 0px; position: relative; margin-top: 0px; width: 100%; max-width: unset;"] > [style="display: flex; align-items: center;"] > [style="flex-grow: 1; width: 100%;"] > .form-field > .form-field__field > .input').type('тестовое уточнение');
});
it('Поле "Статус документов". Нажимаем', () => {
    cy.get('[data-field-name="source_status"] > [style="display: flex; align-items: flex-start;"] > [style="padding-left: 20px; flex-grow: 1; padding-top: 0px; position: relative; margin-top: 0px; width: 100%; max-width: unset;"] > [data-v-3178dd4a=""][style="display: flex; align-items: center;"] > [style="flex-grow: 1; width: 100%;"] > .form-field > .form-field__field > .select > .multiselect > .multiselect__tags > .multiselect__placeholder')
    .type('Акт{downarrow}{Enter}');
});
it('Поле "Юридическое лицо". Печатаем и нажимаем энтер', () => {
cy.get('[data-field-name="company_own"] > [style="display: flex; align-items: flex-start;"] > [style="padding-left: 20px; flex-grow: 1; padding-top: 0px; position: relative; margin-top: 0px; width: 100%; max-width: unset;"] > [data-v-3178dd4a=""][style="display: flex; align-items: center;"] > [style="flex-grow: 1; width: 100%;"] > .form-field > .form-field__field > .select > .multiselect > .multiselect__tags')
.type('ООО ТЕСТ{Enter}');
});
it('Поле "Контрагент". Печатаем и нажимаем энтер', () => {
    cy.get('[data-field-name="company_client"] > [style="display: flex; align-items: flex-start;"] > [style="padding-left: 20px; flex-grow: 1; padding-top: 0px; position: relative; margin-top: 0px; width: 100%; max-width: unset;"] > [data-v-3178dd4a=""][style="display: flex; align-items: center;"] > [style="flex-grow: 1; width: 100%;"] > .form-field > .form-field__field > .select > .multiselect > .multiselect__tags > .multiselect__placeholder')
    .type('Тестовый контрагент{Enter}');
});
it('Поле "Счет отправителя". Печатаем и нажимаем энтер', () => {
cy.get('[data-field-name="account_sender"] > [style="display: flex; align-items: flex-start;"] > [style="padding-left: 20px; flex-grow: 1; padding-top: 0px; position: relative; margin-top: 0px; width: 100%; max-width: unset;"] > [data-v-3178dd4a=""][style="display: flex; align-items: center;"] > [style="flex-grow: 1; width: 100%;"] > .form-field > .form-field__field > .select > .multiselect > .multiselect__tags')
.type('0344{Enter}');
});
it('Поле "Счет получателя". Печатаем и нажимаем энтер', () => {
cy.get('[data-field-name="account_recipient"] > [style="display: flex; align-items: flex-start;"] > [style="padding-left: 20px; flex-grow: 1; padding-top: 0px; position: relative; margin-top: 0px; width: 100%; max-width: unset;"] > [data-v-3178dd4a=""][style="display: flex; align-items: center;"] > [style="flex-grow: 1; width: 100%;"] > .form-field > .form-field__field > .select > .multiselect > .select__caret > [style="display: flex; align-items: center;"] > .icon')
.type('0506{Enter}');
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
cy.get('.button--state-filled')
.click();
});
it('Проверяем, что появилось уведомление, что "Платеж успешно сохранен"', () => {
cy.contains('Платеж успе').should('be.visible');
cy.wait(100)
});

it('Переходим в "Платежи"', () => {
cy.get(':nth-child(1) > .side__link')
.click();
});
it('Нажимаем на сортировку по "Дата"', () => {
cy.get('[data-field="date_fact"] > [style="display: flex; align-items: center; color: rgb(0, 0, 0);"]')
.click();
});
it('Нажимаем на сортировку по "Источник"', () => {
cy.get('[data-field="source"] > [style="display: flex; align-items: center; color: rgb(0, 0, 0);"] > span')
.click();
});
it('Проверяем, что искомая сумма есть на странице', () => {
cy.contains('66 544').should('be.visible');
});
//it('Поле "Статус документов". Выбираем "Акт подписан"', () => {
//cy.get('[data-field-name="source_status"] > [style="display: flex; align-items: flex-start;"] > [style="padding-left: 20px; flex-grow: 1; padding-top: 0px; position: relative; margin-top: 0px; width: 100%; max-width: unset;"] > [data-v-3178dd4a=""][style="display: flex; align-items: center;"] > [style="flex-grow: 1; width: 100%;"] > .form-field > .form-field__field > .select > .multiselect > .multiselect__tags > .multiselect__single')
//.click();
//});
    //шаблон
//it('Поле "Статус оплаты". Нажимаем кнопку "Оплачен"', () =>{
 //   .click();
 //   .type('admin');
 //});
