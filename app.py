#T = 0.1GAA + max (0.6F + 0.2max(Qz1, Qz2),  0.4F + 0.2Qz1 + 0.3Qz2)
GAA = int(input('GAA: '))
Q1 = int(input('Quiz 1: '))
Q2 = int(input('Quiz 2: '))
F = int(input('Final Marks(End): '))
Bonus = int(input('Bonus: '))

T  = 0.1*GAA + max(
    0.6*F+0.2*max(Q1,Q2), 
    0.4*F + 0.2*Q1 + 0.3 * Q2
    )

if T>=40:
    print("Total Mark= ",T+Bonus)
    T+=Bonus
else:
    print("Total Mark= ",T)
if T<40: 
    print("FAIL","Grade = U")
elif 40<=T<50:
    print("PASS","Grade = E")
elif 50<=T<60:
    print("PASS","Grade = D")
elif 60<=T<70:
    print("PASS","Grade = C")
elif 70<=T<80:
    print("PASS","Grade = B")
elif 80<=T<90:
    print("PASS","Grade = A")
elif 90<=T:
    print("PASS","Grade = S","Badhai ho 60 LPA lagega tumhara")