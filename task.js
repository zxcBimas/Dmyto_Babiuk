//task1
var str = ["asd", "zxc", 56, "qwer", 2, "a", 3];
var filtered = str.filter(Number);
console.log(filtered);
//task2
function first_non_repeating_letter(str) {
    for(let i = 0; i < str.length; i++) {
       let j = str.charAt(i)
       if (str.indexOf(j) == str.lastIndexOf(j)) {
         return j;
       }
    }
    return null;
 }
 console.log(first_non_repeating_letter("zzxxcaswe")); 
 //task3

function digroot(n) {
    return (n - 1) % 9 + 1;
    //  if (n<10) 
    //return n;
    //return dig
 }
 console.log(digroot(123))
//task4

const func = (num, tar) => {
 
    const previousValues = {};
    for (let i = 0; i < num.length; i++) {

      const complement = tar - num[i];
      if (previousValues[complement]) {
        return [complement, num[i]];
      }
      previousValues[num[i]] = true;
    }
  };
  console.log(func([1,2, 2, 3], 4));
  //task5
  function boyz(s) {

    s = s.replace(/:/g, ", ").toUpperCase();
  
   const dot_comma = ';'
   let arr = s.split(dot_comma)
    arr.sort(function compare(a, b) {
        var split1 = a.split(",");
        var split2 = b.split(",");
        var fname1 = split1[0]
        var fname2 = split2[0]
        var lname1 = split1[split1.length - 1];
        var lname2 = split2[split2.length - 1];
        if (lname1< lname2)
         return -1;
        if (lname1 > lname2)
         return 1; 
  
        if (fname1< fname2)
         return -1; 
        if (fname1 > fname2)
         return 1; 
        return 0; 
    })
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = (arr[i].replace(/([\w ]+), ([\w ]+)/g, "$2 $1"))
    let comma = ","
    newarr.push(`(${temp})`)
    }
    
  let str;
  str = newarr.toString().replace(/[ ,.]/g, " ").toUpperCase();
  return str
  }
 s="Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
  console.log(boyz(s))

//extratask1

  function swap(n){
    var z = n.toString().split('');
    var pi = -1;
    for (var i = z.length-1; i > 0; i--) {
      if (+z[i] > +z[i-1]) {
        pi = i-1;
        break;
      }
    }
    if (pi == -1) return pi;
    var r = z.splice(pi);
    var piv = r.splice(0, 1)[0];
    var low = null, l = null;
    for (var i = 0; i < r.length; i++) {
      if (r[i] > piv) {
        if (low == null || r[i] < low) {
          low = r[i];
          l = i;
        }
      }
    }
  
    if (l == null) return -1;

    r.splice(l, 1);
    r.push(piv);
    r = r.sort();

    var final = +z.concat([low]).concat(r).join('');
    if (final < n) return -1;
  
    return final;
  }
  console.log(swap(16488))