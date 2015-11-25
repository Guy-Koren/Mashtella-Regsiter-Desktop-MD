function send() {
    if ($('#name').val() != "" && $('#phone').val() != "") {
        try {
            $.ajax({
                type: "POST",
                url: "https://mandrillapp.com/api/1.0/messages/send.json",
                data: {
                    'key': 'eiP254Z6tEBZnZhMiC_XfQ',
                    'message': {
                        'from_email': 'tomerosenfeld007@gmail.com',
                        'to': [
                            {
                                'email': 'edangilboa@gmail.com',
                                'name': 'Tomer',
                                'type': 'to'
                            }
                        ],
                        'subject': 'הרשמה לבית הספר להישגים',
                        'html': "Name: " + $('#name').val() + "\nPhone number: " + $('#phone').val() + "\nEmail: " + $('#email').val() + "\nDate: " + new Date()
                    }
                }
            });
            alert("נשלח בהצלחה");
        }
        catch (e) {
            alert("שגיאה בשליחה, אנא נסה שוב");
        }
    }
    else {
        alert("אנא מלא את השם והטלפון")
    }
}