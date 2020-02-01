let ru = (function () {

    ru.Name = 'RU';
    ru.Brand = 'Wallet';
    ru.MainHeader = 'Мгновенный кошелек для удобной передачи монет другим людям и расходов';
    ru.CreateWallet = 'Создать кошелек';
    ru.PoweredBy = 'Работает на';

    ru.PasswordHeader = 'Введите пароль, который будет использоваться для доступа к Вашему кошельку';
    ru.PasswordWarning = 'Помните, что без этого пароля Вы не сможете пользоваться своим кошельком';
    ru.Password = 'Пароль';
    ru.PasswordConfirmation = 'Подтверждение пароля';
    ru.PasswordSecure = 'Безопасный пароль';
    ru.PasswordUnsecure = 'Небезопасный пароль';
    ru.PasswordLocalStorage = 'Приватный ключ и пароль для доступа к кошельку хранятся на Вашем устройстве и не отправляются на сервер';

    ru.SaveWalletHeader = 'Сохраните этот кошелек';
    ru.SaveWalletQR = 'QR-код для доступа к этому кошельку';
    ru.SaveWalletLink = 'Ссылка для доступа к этому кошельку';
    ru.SaveWalletPassword = 'Пароль для открытия этого кошелька';
    ru.SaveWalletConfirmation = 'Я подтверждаю, что сохранил(а) ссылку или QR-код для доступа к кошельку и пароль для его открытия';
    ru.SaveWalletOpen = 'Открыть кошелек';

    ru.HomeBalance = 'Доступно';
    ru.HomeTransferring = 'Вы можете получить, обменять или отправить монеты';
    ru.HomeReceive = 'Получить';
    ru.HomeExchange = 'Обменять';
    ru.HomeSend = 'Отправить';
    ru.HomeSpending = 'Или потратить их на';
    ru.HomeCategoryMobile = 'Мобильный услуги';
    ru.HomeCategoryGames = 'Игры и развлечения';
    ru.HomeCategorySocial = 'Социальные сети';
    ru.HomeCategoryEducation = 'Образование';
    ru.HomeCategoryStores = 'Онлайн магазины';
    ru.HomeCategoryCharity = 'Благотворительность';
    ru.HomeLearnMore = 'Узнайте больше о кошельке';

    ru.LearnMoreMinter = 'Этот кошелек работает на платформе Minter, о которой Вы можете узнать больше на https://www.minter.network/.';
    ru.LearnMoreBIP = 'Minter позволяет создавать собственные монеты с абсолютной и мгновенной ликвидностью. Основная монета в сети Minter – BIP.';
    ru.LearnMoreBTCSecure = 'Кошелек был разработан Staking-as-a-Service провайдером BTC.Secure, Вы можете узнать больше на https://btcsecure.io/.';

    ru.ReceiveHeader = 'Получить монеты';
    ru.ReceiveText = 'Отправьте любые монеты Minter на этот кошелек';
    ru.ReceiveOtherWallet = 'С другого кошелька';
    ru.ReceiveShare = 'Поделиться';

    ru.UseMax = 'Макс.';

    ru.ExchangeHeader = 'Обмен монет';
    ru.ExchangeCoinSpend = 'Выберите монету, которую хотите обменять';
    ru.ExchangeCoinGet = 'Введите монету, которую хотите получить';
    ru.ExchangeAmountSpend = 'Обменять';
    ru.ExchangeAmountGet = 'Получить';
    ru.ExchangeTotal = 'Вы обменяете';
    ru.ExchangeExchange = 'Обмен';

    ru.ExchangeResultHeader = 'Результат обмена монет';
    ru.ExchangeResultTotal = 'Вы успешно обменяли';
    ru.ExchangeResultTotalTo = 'на';

    ru.SendHeader = 'Отправить монеты';
    ru.SendCoin = 'Выберите монету, которую хотите отправить';
    ru.SendTo = 'Отправить кому';
    ru.SendToWallet = 'Кошелек';
    ru.SendToSingle = 'Один получатель';
    ru.SendToMany = 'Много получателей';
    ru.SendAmount = 'Сумма';
    ru.SendNumberRecipients = 'Количество получателей (до 100)';
    ru.SendTotal = 'Вы отправите';
    ru.SendSend = 'Отправить';
    ru.SendNext = 'Далее';

    ru.ShareWalletHeader = 'Поделитесь этим кошельком';
    ru.ShareWalletQR = 'Покажите этот QR-код получателю';
    ru.ShareWalletLink = 'Или отправьте эту ссылку любым способом';
    ru.ShareWalletPassword = 'Получатель должен ввести этот пароль, чтобы открыть этот кошелек';
    ru.ShareWalletConfirmation = 'Я подтверждаю, что сохранил(а) или отправил(а) получателю ссылку или QR-код для доступа к кошельку и пароль для его открытия';
    ru.ShareWalletExport = 'Экспорт';

    ru.ShareWalletManyHeader = 'Поделитесь этими кошельками';
    ru.ShareWalletMany = 'Отправьте получателям каждую ссылку и пароль любым способом';
    ru.ShareWalletManyConfirmation = 'Я подтверждаю, что сохранил(а) или отправил(а) получателям ссылки или QR-коды для доступа к кошелькам и пароли, чтобы открыть их';
    ru.ShareWalletManyHeaderCountShare = 'Поделитесь';
    ru.ShareWalletManyHeaderCountOf = 'из';
    ru.ShareWalletManyHeaderCountWallets = 'кошельков';

    ru.SendResultHeader = 'Результат отправки монет';
    ru.SendResultTotal = 'Вы успешно отправили';
    ru.SendResultTotalManyTo = 'для';
    ru.SendResultTotalManyRecipients = 'получателей';

    ru.PaySelectStore = 'Выберите поставщика услуг или магазин';
    ru.PaySelectProduct = 'Выберите продукт или услугу';

    ru.PayRefillAccount = 'Пополнение счета';
    ru.PayMobileNumbers = 'Оплата мобильных номеров в России, Белоруссии, Украине и Казахстане';
    ru.PayCoinSpend = 'Выберите монету, которую хотите потратить';
    ru.PayAmountEnter = 'Введите сумму платежа';
    ru.PayAmount = 'Сумма платежа';
    ru.PayMax = 'Макс.';
    ru.PayID = 'Введите свой ID в';
    ru.PayPhone = 'Введите номер телефона';
    ru.PayEmail = 'Введите адрес электронной почты, чтобы получить ссылку на заказ';
    ru.PayPhoneLocalCurrency = 'Платеж на';
    ru.PayTotal = 'Вы заплатите';
    ru.PayPay = 'Оплатить';

    ru.PayResultTotal = 'Вы успешно оплатили';
    ru.PayResultGetOrder = 'Получите оплаченный заказ здесь';


    ru.Copy = 'Скопировано в буфер обмена';
    ru.Logout = 'Выход';

    function ru() {
    }

    return ru;
})();
window.ru = ru;
