'''
Funcion con identificador
'''
'''
def apply(num, f):
    return f(num)

def double(num):
    return 2 * num
'''
'''
No hay funciones anonimas en python,
pero las arrow function pueden hacerse 
con lambda, por lo que solo sirve para
expresiones de una sola linea
'''
'''
print(apply(5, lambda num: 2 * num))
'''
from functools import reduce

dollars = ["32$", "15$", "12$", "17$", "20$"]

prices = map(lambda dollar: int(dollar[0:-1]), dollars)
expensive = filter(lambda price: price >= 20, prices)
#total = sum(expensive)
'''
Reduce recibe 3 parametros, donde el ultimo es 
el valor inicial
'''
total = reduce(lambda acum, price: acum + price, expensive, 5)

#print(list(prices))
#print(list(expensive))
print(total)