document.addEventListener('DOMContentLoaded', function() {
    // Элементы DOM
    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    const mobileMenu = document.getElementById('mobileMenu');
    const registerBtn = document.getElementById('registerBtn');
    const registerCardBtn = document.getElementById('registerCardBtn');
    const registerModal = document.getElementById('registerModal');
    const loginBtn = document.getElementById('loginBtn');
    const modalCloseBtns = document.querySelectorAll('.modal-close');
    const registrationForm = document.getElementById('registrationForm');

    // Открытие/закрытие мобильного меню
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    menuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.menu-list a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Открытие модального окна регистрации
    registerBtn.addEventListener('click', () => {
        registerModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    registerCardBtn.addEventListener('click', () => {
        registerModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Открытие окна входа
    loginBtn.addEventListener('click', () => {
        // В демо-версии показываем то же окно регистрации
        registerModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Закрытие модальных окон
    modalCloseBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            registerModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Закрытие модального окна при клике вне его
    registerModal.addEventListener('click', (e) => {
        if (e.target === registerModal) {
            registerModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Обработка формы регистрации
    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(registrationForm);
        const name = formData.get('name');
        const phone = formData.get('phone');
        
        // В демо-версии просто показываем сообщение
        alert(`Спасибо за регистрацию, ${name}! Карта успешно активирована. На ваш номер ${phone} отправлено SMS.`);
        
        // Закрываем модальное окно
        registerModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Очищаем форму
        registrationForm.reset();
    });

    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Имитация загрузки данных для раздела "Мероприятия"
    function loadEvents() {
        const events = [
            { title: 'День Рапунцель', date: 'Сегодня', time: '14:00' },
            { title: 'Рыцарский турнир', date: 'Завтра', time: '16:00' },
            { title: 'Волшебная лаборатория', date: '12 мая', time: '13:00' }
        ];
        
        // Здесь можно добавить отображение событий при клике на раздел
    }

    // Кнопка "Посмотреть цены"
    document.getElementById('pricesBtn').addEventListener('click', () => {
        const pricesSection = document.getElementById('prices');
        window.scrollTo({
            top: pricesSection.offsetTop - 80,
            behavior: 'smooth'
        });
    });

    // Анимация при скролле
    function animateOnScroll() {
        const elements = document.querySelectorAll('.feature, .price-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Инициализация анимаций
    document.querySelectorAll('.feature, .price-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);

    // Инициализация
    loadEvents();
    animateOnScroll();

    // Сообщение для демо-версии
    console.log('Демо-версия мобильного сайта "Волшебный замок"');
    console.log('Для CMS интегрируйте WordPress или другую систему управления контентом');
    console.log('Для онлайн-оплаты подключите: Яндекс.Кассу, CloudPayments или аналоги');
    console.log('Для Email-рассылок используйте: MailChimp, UniSender или SendPulse');
});
