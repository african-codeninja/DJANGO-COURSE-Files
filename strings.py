'hello'
"hello"

#indexing

mystring = 'abcdefghij'
#prints the whole string
print(mystring)

#indexing string sequesnce letter a
print(mystring[0])

#indexing string sequesnce the last letter
print(mystring[-1])

#indexing string sequesnce the third letter(index 2) till the end
print(mystring[2:])

#indexing string sequesnce from the beggining letter till the sixth letter
print(mystring[:6])

#indexing string sequesnce from the 3rd letter till the 8th letter
print(mystring[2:8])

#indexing string sequesnce with a double step size
print(mystring[::2])

#indexing string sequesnce with a triple step size
print(mystring[::3])

#Method upper which capitalizes a mystring there are many other methods
x= mystring.upper()
print(x)

y= mystring.capitalize()
print(y)

newString = 'Ngina Munywoki'
a = newString.split('n')
print(a)

s="Insert my name here string here: {}".format("Moses Mwangi!")
print(s)

d="Insert my First name here: {} second name here: {}".format('Moses', 'Mwangi')
print(d)

d="Insert name here: {f}  name here: {f}".format(c='Moses', f='Mwangi')
print(d)
