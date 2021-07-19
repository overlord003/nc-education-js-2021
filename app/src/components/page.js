class Page extends Node {
    constructor(instruction='Создавайте таблицы и решайте, когда встретиться в друзьями!') {
        super('main', {classList: 'app__content content'});

        this.insertHTML(`
        <header class="content__description description">
            <h1 class="description__title">Выбор даты</h1>
            <p class="description__subtitle">${instruction}</p>
            <svg class="description__img" id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><circle cx="256" cy="256" fill="#ff5876" r="248"/><path d="m256 486c-133.952 0-243.081-106.205-247.82-239-.107 2.988-.18 5.986-.18 9 0 136.967 111.033 248 248 248s248-111.033 248-248c0-3.014-.073-6.012-.18-9-4.739 132.795-113.868 239-247.82 239z" fill="#e6485d"/><circle cx="256" cy="256" fill="#e4eef9" r="206.942"/><path d="m256 444.942c-111.274 0-202.022-87.828-206.736-197.942-.128 2.985-.207 5.983-.207 9 0 114.291 92.651 206.942 206.942 206.942s206.943-92.651 206.943-206.942c0-3.017-.079-6.015-.207-9-4.713 110.114-95.461 197.942-206.735 197.942z" fill="#d5e0f2"/><path d="m331.17 183.393c-5.899-5.818-15.396-5.752-21.213.146l-47.109 47.761c10.522 2.911 18.324 12.359 18.76 23.701l49.707-50.395c5.818-5.898 5.753-15.396-.145-21.213z" fill="#405b6c"/><path d="m230.367 256c0-11.14 7.109-20.617 17.036-24.151l-92.462-82.397c-6.186-5.512-15.667-4.966-21.178 1.219s-4.966 15.667 1.219 21.178l95.407 85.021c-.01-.289-.022-.578-.022-.87z" fill="#405b6c"/><circle cx="256" cy="256" fill="#ff5876" r="25.633"/><path d="m216.381 244.387 14.008 12.483c-.01-.29-.022-.578-.022-.87 0-11.14 7.109-20.617 17.036-24.151l-12.635-11.26c-8.792 5.283-15.446 13.747-18.387 23.798z" fill="#2d4456"/><path d="m274.758 219.224-11.91 12.075c10.522 2.911 18.324 12.359 18.76 23.701l13.128-13.31c-3.606-9.76-10.801-17.775-19.978-22.466z" fill="#2d4456"/><path d="m256 263.634c-10.989 0-20.36-6.917-24.005-16.634-1.051 2.801-1.629 5.832-1.629 9 0 14.157 11.477 25.634 25.633 25.634 14.157 0 25.634-11.477 25.634-25.634 0-3.168-.578-6.199-1.629-9-3.644 9.716-13.015 16.634-24.004 16.634z" fill="#e6485d"/></g><g><g><path d="m437.02 74.98c-48.353-48.351-112.639-74.98-181.02-74.98s-132.667 26.629-181.02 74.98c-48.352 48.353-74.98 112.64-74.98 181.02 0 65.664 24.828 128.099 69.909 175.802 2.851 3.017 7.608 3.15 10.623.3 3.017-2.851 3.151-7.607.3-10.623-42.434-44.902-65.803-103.67-65.803-165.479 0-64.366 25.065-124.879 70.578-170.392 45.514-45.514 106.027-70.579 170.393-70.579s124.879 25.065 170.392 70.579c45.513 45.513 70.578 106.026 70.578 170.392s-25.066 124.879-70.578 170.392c-45.513 45.514-106.026 70.579-170.392 70.579-56.111 0-110.745-19.706-153.838-55.487-3.193-2.651-7.93-2.212-10.582.981-2.651 3.193-2.211 7.931.981 10.582 45.785 38.016 103.828 58.953 163.439 58.953 68.381 0 132.667-26.629 181.02-74.98 48.352-48.353 74.98-112.64 74.98-181.02s-26.628-132.667-74.98-181.02z"/><path d="m402.975 109.552c2.833-3.033 2.67-7.789-.363-10.621-39.909-37.269-91.977-57.793-146.612-57.793-57.391 0-111.348 22.349-151.93 62.932s-62.932 94.538-62.932 151.93 22.349 111.348 62.932 151.931 94.539 62.931 151.93 62.931 111.348-22.349 151.931-62.931 62.931-94.539 62.931-151.931c0-49.329-16.259-95.72-47.02-134.156-2.594-3.241-7.323-3.766-10.563-1.172-3.24 2.593-3.764 7.322-1.171 10.562 28.605 35.743 43.724 78.886 43.724 124.766 0 110.188-89.645 199.833-199.833 199.833s-199.832-89.645-199.832-199.833 89.645-199.833 199.833-199.833c50.813 0 99.238 19.088 136.354 53.748 3.035 2.835 7.791 2.67 10.621-.363z"/><path d="m263.515 98.649v-23.277c0-4.15-3.364-7.515-7.515-7.515s-7.515 3.365-7.515 7.515v23.276c0 4.15 3.364 7.515 7.515 7.515s7.515-3.364 7.515-7.514z"/><path d="m248.485 413.351v23.276c0 4.15 3.364 7.515 7.515 7.515s7.515-3.365 7.515-7.515v-23.276c0-4.15-3.364-7.515-7.515-7.515s-7.515 3.365-7.515 7.515z"/><path d="m436.627 263.515c4.151 0 7.515-3.365 7.515-7.515s-3.364-7.515-7.515-7.515h-23.276c-4.151 0-7.515 3.364-7.515 7.515s3.364 7.515 7.515 7.515z"/><path d="m75.373 248.485c-4.151 0-7.515 3.364-7.515 7.515s3.364 7.515 7.515 7.515h23.276c4.151 0 7.515-3.365 7.515-7.515s-3.364-7.515-7.515-7.515z"/><path d="m357.588 351.146c3.161 2.659 7.908 2.269 10.588-.921 2.669-3.178 2.256-7.918-.921-10.587l-81.672-68.603c2-3.919 3.245-8.283 3.539-12.904l47.69-48.35c8.687-8.451 8.585-23.551-.219-31.882-8.432-8.714-23.553-8.576-31.882.219l-44.363 44.977c-3.606-.495-7.485-.355-11.013.378l-89.594-79.841c-8.887-8.252-23.953-7.381-31.831 1.833-8.269 9.28-7.447 23.559 1.833 31.829l43.357 38.636c3.1 2.762 7.847 2.488 10.611-.61 2.761-3.098 2.487-7.849-.611-10.61l-43.355-38.635c-3.094-2.757-3.368-7.517-.611-10.61 2.624-3.072 7.653-3.36 10.61-.611l84.956 75.708c-3.875 3.25-6.996 7.368-9.068 12.05l-20.094-17.906c-3.098-2.762-7.849-2.488-10.61.611-2.761 3.098-2.487 7.849.611 10.61l27.576 24.573c2.204 16.183 16.106 28.698 32.885 28.698 7.467 0 14.364-2.479 19.916-6.655zm-42.175-162.473c2.777-2.934 7.809-2.968 10.627-.072 2.936 2.777 2.969 7.81.072 10.627l-40.747 41.311c-2.385-4.51-5.777-8.407-9.876-11.39zm-59.413 85.496c-10.019 0-18.169-8.151-18.169-18.169s8.151-18.169 18.169-18.169c10.019 0 18.169 8.151 18.169 18.169s-8.15 18.169-18.169 18.169z"/></g></g></g></svg>
        </header>
        `);
    }
}

class Section extends Node {
    constructor(parentClass, sectionClass) {
        super('section', {classList: `${parentClass}__${sectionClass} ${sectionClass}`});
    }
}

class StartPage extends Page {
    constructor() {
        super('Нажмите на кнопку "Начать".');

        this.section = new Section('content', 'start-section');
        this.section.appendIn(this);

        this.startButton = new Button('start-section__button', 'Начать');
        this.startButton.appendIn(this.section)
        this.startButton.addHandler('click', (event) => {
            window.router.go('/calendar');
        });
    }
}

class CalendarPage extends Page {
    constructor() {
        super('Шаг 1. Выберите даты в календаре для встречи.');

        this.section = new Section('content', 'calendar-section');
        this.section.appendIn(this);

        this.calendarBlock = new CalendarBlock('calendar-section');
        this.calendarBlock.start();
        this.calendarBlock.appendIn(this.section);

        this.datesBlock = new DatesBlock('calendar-section');
        this.datesBlock.appendIn(this.section);

        store.subscribe((state) => {
            this.datesBlock.update(state.dates);
        });

        this.prevButton = new Button('calendar-section__prev-button', 'Назад');
        this.prevButton.appendIn(this.section)
        this.prevButton.addHandler('click', (event) => {
            window.router.go('/');
        });

        this.nextButton = new Button('calendar-section__next-button', 'Далее');
        this.nextButton.appendIn(this.section)
        this.nextButton.addHandler('click', (event) => {
            let dates = store.state ? store.state.dates : [];
            if (dates.length > 0) window.router.go('/users');
            else alert('Выберите хоть какие-то даты.');
        });
    }
}

class UsersPage extends Page {
    constructor() {
        super('Шаг 2. Добавьте пользователей.');

        this.section = new Section('content', 'users-section');
        this.section.appendIn(this);

        let dates = store.state ? store.state.dates : [];
        let names = ['Christina', 'Nikita', 'Mark', 'Sofia'];
        this._table = new Table('users-section', names, dates);
        this._table.appendIn(this.section);

        this.prevButton = new Button('users-section__prev-button', 'Назад');
        this.prevButton.appendIn(this.section)
        this.prevButton.addHandler('click', (event) => {
            window.router.go('/calendar');
        });

        this.nextButton = new Button('users-section__next-button', 'Далее');
        this.nextButton.appendIn(this.section)
        this.nextButton.addHandler('click', (event) => {
            alert('Посмотрите сами на табличку и проанализируйте!');
        });

        store.subscribe((state) => {
            this._table.update(state.dates);
        });

        this.addButton = new Button('users-section__add-button', 'Добавить');
        this.addButton.appendIn(this.section)
        this.addButton.addHandler('click', (event) => {
            this._table.addNewRow();
        });
    }
}