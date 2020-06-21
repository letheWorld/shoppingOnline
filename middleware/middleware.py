from django.http import JsonResponse
from django.shortcuts import redirect
from django.urls import reverse
from django.utils.deprecation import MiddlewareMixin

from App.models import User

REQUIRE_LOGIN_Json = [
    '/app/addtocart/',
    '/app/subtocart/',
    '/app/changecartstate/',
    '/app/makeorder/',
    '/app/payed/',
]

REQUIRE_LOGIN = [
    '/app/cart/',
    '/app/orderdetail/',
    '/app/orderlistnotpay/',
    '/app/orderlistnotreceive/',
]


class LoginMiddleware(MiddlewareMixin):

    def process_request(self, request):

        if request.path in REQUIRE_LOGIN_Json:

            user_id = request.session.get('user_id')

            if user_id:
                try:
                    user = User.objects.get(pk=user_id)

                    request.user = user
                except:
                    # return redirect(reverse('app:login'))
                    data = {
                        'status': 301,
                        'msg': 'user not avaliable',
                    }
                    return JsonResponse(data=data)
            else:
                # return redirect(reverse('app:login'))
                data = {
                    'status': 301,
                    'msg': 'user not login',
                }
                return JsonResponse(data=data)

        if request.path in REQUIRE_LOGIN:

            user_id = request.session.get('user_id')

            if user_id:
                try:
                    user = User.objects.get(pk=user_id)

                    request.user = user
                except:
                    return redirect(reverse('app:login'))
            else:
                return redirect(reverse('app:login'))










