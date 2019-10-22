  //截取   ￥78.11(21321321312)
  function ddj(str) {
    var aPos = str.indexOf('￥');
    var bPos = str.indexOf('(');
    var r = str.substr(aPos + 1, bPos - aPos - 1);
    return r;
  }
  //截取 ￥78.00
  function scj(str) {
    var aPos = str.indexOf('￥');
    var bPos = str.lastIndexOf('0')
    var r = str.substr(aPos + 1, bPos - aPos);
    return r;
  }
