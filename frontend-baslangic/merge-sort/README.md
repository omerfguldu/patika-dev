# Merge Sort

**[16,21,11,8,12,22] dizisinin Merge Sort ile sıralanma aşamaları ve Big-O gösterimi:**

**Aşama 1** --> [16,21,11] ----- [8,12,22]

**Aşama 2** --> [16] [21,11] ----- [8] [12,22]

**Aşama 3** --> [16] [21] [11] ----- [8] [12] [22]

**Aşama 4** --> [16] [11,21] ----- [8] [12,22]

**Aşama 5** --> [11,16,21] ----- [8,12,22]

**Aşama 6** --> [8,11,12,16,21,22]

### Big-O Gösterimi

Merge Sort bütün caselerde diziyi ikiye bölerek ilerlediğinden ve bölünen dizileri birleştirmesi lineer bir zaman aldığından dolayı tüm caselerde time complexitysi O(n*logn) olacaktır.

**Big-O --> O(n*logn)**


