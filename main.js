/* Скрипт будет работать только в devtool браузера в консоли
   Скрипт сможет корректно работать только если скрипт запущен на сайте Twitch из-за безопасности браузера
   Скрипт выполняет только нажатие на кнопку получения бонусов, открытие и закрытие вкладок twitch из массива
   При запуске скрипта нельзя закрывать первую вкладку, а иначе произойдет остановка скрипта
   Чтобы остановить скрипт требуется перезагрузить или закрыть страницу на который был запущен скрипт 
*/


    let channels = [
         "https://www.twitch.tv/tijoe",
         "https://www.twitch.tv/kisumichan", 
         "https://www.twitch.tv/skywhywalker", 
         "https://www.twitch.tv/distortion2"];

         let openedWindow;

         function openWindow(channel) {
           openedWindow = window.open(channel);
         }
         
         function closeOpenedWindow() {
           openedWindow.close();
         }

         function clickGetPoints(){
            openedWindow.document.querySelector('button[class="ScCoreButton-sc-ocjdkq-0 ScCoreButtonSuccess-sc-ocjdkq-5 hZACqf cKQySD"]').click();
         }

         let counter = 0;

         function start(){
            if (counter == channels.length){
                counter=0;
            }
            openWindow(channels[counter])
            setTimeout(clickGetPoints,8000)
            setTimeout(closeOpenedWindow,10000)
            counter++;
            setTimeout(start,11000)
         }
         start()
