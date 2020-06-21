from django.db import models

from App.views_constant import ORDER_STATUS_NOT_PAY


class Main(models.Model):
    imag = models.CharField(max_length=255)
    name = models.CharField(max_length=64)
    trackid = models.IntegerField(default=1)
    class Meta:
        abstract = True

# Create your models here.
class MainWheel(Main):
    '''
    shop_wheel(img,name,trackid)
    '''
    class Meta:
        db_table = 'shop_wheel'

class MainNav(Main):
    '''
    shop_nav(img,name,trackid)
    '''
    class Meta:
        db_table = 'shop_nav'

class MainMustBuy(Main):
    '''
    shop_mustbuy(img,name,trackid)
    '''

    class Meta:
        db_table = 'shop_mustbuy'

class MainShow(Main):
    '''
    shop_mainshow(trackid,name,img,categoryid,brandname,img1,childcid1,productid1,longname1,
    price1,marketprice1,img2,childcid2,productid2,longname2,price2,marketprice2,img3,childcid3,
    productid3,longname3,price3,marketprice3)
    '''
    categoryid = models.IntegerField(default=1)
    brandname = models.CharField(max_length=64)
    img1 = models.CharField(max_length=255)
    childcid1 = models.IntegerField(default=1)
    productid1 = models.IntegerField(default=1)
    longname1 = models.CharField(max_length=128)
    price1 = models.FloatField(default=1)
    marketprice1 = models.FloatField(default=0)
    img2 = models.CharField(max_length=255)
    childcid2 = models.IntegerField(default=1)
    productid2 = models.IntegerField(default=1)
    longname2 = models.CharField(max_length=128)
    price2 = models.FloatField(default=1)
    marketprice2 = models.FloatField(default=0)
    img3 = models.CharField(max_length=255)
    childcid3 = models.IntegerField(default=1)
    productid3 = models.IntegerField(default=1)
    longname3 = models.CharField(max_length=128)
    price3 = models.FloatField(default=1)
    marketprice3 = models.FloatField(default=0)

    class Meta:
        db_table = 'shop_mainshow'

class FoodType(models.Model):
    '''
    shop_foodtype(typeid,typename,childtypenames,typesort)
    '''
    typeid = models.IntegerField(default=1)
    typename = models.CharField(max_length=32)
    childtypenames = models.CharField(max_length=255)
    typesort = models.IntegerField(default=1)
    class Meta:
        db_table = 'shop_foodtype'

class Goods(models.Model):
    ''''
    axf_goods(productid,productimg,productname,productlongname,isxf,pmdesc,specifics,price,
    marketprice,categoryid,childcid,childcidname,dealerid,storenums,productnum)
    '''
    productid = models.IntegerField(default=1)
    productimg = models.CharField(max_length=255)
    productname = models.CharField(max_length=128)
    productlongname = models.CharField(max_length=255)
    isxf = models.BooleanField(default=False)
    pmdesc = models.BooleanField(default=False)
    specifics = models.CharField(max_length=64)
    price = models.FloatField(default=0)
    marketprice = models.FloatField(default=1)
    categoryid = models.IntegerField(default=1)
    childcid = models.IntegerField(default=1)
    childcidname = models.CharField(max_length=128)
    dealerid = models.IntegerField(default=1)
    storenums = models.IntegerField(default=1)
    productnum = models.IntegerField(default=1)

    class Meta:
        db_table = 'shop_goods'

class User(models.Model):
    username = models.CharField(max_length=32, unique=True)
    password = models.CharField(max_length=255)
    u_email = models.CharField(max_length=64, unique=True)
    u_icon = models.ImageField(upload_to='icons/%Y/%m/%d/')
    is_active = models.BooleanField(default=False)
    is_delete = models.BooleanField(default=False)

    class Meta:
        db_table = 'shop_user'

class Cart(models.Model):

    c_user = models.ForeignKey(User)
    c_goods = models.ForeignKey(Goods)

    c_goods_num = models.IntegerField(default=1)
    c_is_select = models.BooleanField(default=True)

    class Meta:
        db_table = 'shop_cart'

class Order(models.Model):
    o_user = models.ForeignKey(User)
    o_price = models.FloatField(default=0)
    o_time = models.DateTimeField(auto_now=True)
    o_status = models.IntegerField(default=ORDER_STATUS_NOT_PAY)

    class Meta:
        db_table = 'shop_order'

class OrderGoods(models.Model):
    o_order = models.ForeignKey(Order)
    o_goods = models.ForeignKey(Goods)
    o_goods_num = models.IntegerField(default=1)

    class Meta:
        db_table = 'shop_ordergoods'














