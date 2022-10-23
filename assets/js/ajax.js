$(document).ready(function() {
    var url = "https://reqres.in/api/users?page=2";
    $.ajax({
            dataType: 'json',
            type: 'GET',
            url : url,
            success: function (datas) {
                var result = "";
                datas.data.forEach(item => {
                    result +=
                        <tr>
                            <td>${item.first_name}</td>
                            <td>${item.last_name}</td>
                            <td>${item.email}</td>
                            <td><img src="${item.avatar}" width="30" class="rounded-circle" /></td>

                        </tr>
                            ;
                });
                $('table').append(result);
        }
    });
});
















