# Insertion Sort

**[22,27,16,2,18,6] -> Dizisinin Insertion Sort türüne göre sıralama aşamaları:**

Aşama 1 --> [22,27,16,2,18,6]

Aşama 2 --> [16,22,27,2,18,6]

Aşama 3 --> [2,16,22,27,18,6]

Aşama 4 --> [2,16,18,22,27,6]

Aşama 5 --> [2,6,16,18,22,27]

---
## Big-O Gösterimi



O(n^2) --> Dizi ters sıralanmış bir şekilde olduğu zaman n elemanlı bir dizide her eleman için n kadar pozisyon kaydırmalıyız.

O(n) --> Dizi sıralı haldedir ve dizide n-1 adet karşılaştırma yapılır.

---
## Time Complexity 

Dizimizin sıralanmış hali [2,6,16,18,22,27] 'dir. 

Bu durumda aradığımız eleman olan 18 dizinin ortasında yer aldığından time complexitysi average case olacaktır.

---

**[7,3,5,8,2,9,4,15,6]** dizisinin Insertion Sort'a göre ilk 4 aşaması

Aşama 1 --> [3,7,5,8,2,9,4,15,6]

Aşama 2 --> [3,5,7,8,2,9,4,15,6]

Aşama 3 --> [2,3,5,7,8,9,4,15,6]

Aşama 4 --> [2,3,4,5,7,8,9,15,6]
