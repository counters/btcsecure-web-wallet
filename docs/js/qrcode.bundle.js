!function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="docs/js",r(r.s=200)}({200:function(t,e,r){"use strict";r.r(e);r(201)},201:function(t,e){var r;!function(){function t(t){this.mode=h.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=[],r=0,o=this.data.length;o>r;r++){var n=this.data.charCodeAt(r);n>65536?(e[0]=240|(1835008&n)>>>18,e[1]=128|(258048&n)>>>12,e[2]=128|(4032&n)>>>6,e[3]=128|63&n):n>2048?(e[0]=224|(61440&n)>>>12,e[1]=128|(4032&n)>>>6,e[2]=128|63&n):n>128?(e[0]=192|(1984&n)>>>6,e[1]=128|63&n):e[0]=n,this.parsedData=this.parsedData.concat(e)}this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function e(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function o(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var o=0;o<t.length-r;o++)this.num[o]=t[o+r]}function n(t,e){this.totalCount=t,this.dataCount=e}function i(){this.buffer=[],this.length=0}function a(){var t=!1,e=navigator.userAgent;return/android/i.test(e)&&(t=!0,aMat=e.toString().match(/android ([0-9]\.[0-9])/i),aMat&&aMat[1]&&(t=parseFloat(aMat[1]))),t}function s(t,e){for(var r=1,o=function(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}(t),n=0,i=d.length;i>=n;n++){var a=0;switch(e){case u.L:a=d[n][0];break;case u.M:a=d[n][1];break;case u.Q:a=d[n][2];break;case u.H:a=d[n][3]}if(a>=o)break;r++}if(r>d.length)throw new Error("Too long data");return r}t.prototype={getLength:function(){return this.parsedData.length},write:function(t){for(var e=0,r=this.parsedData.length;r>e;e++)t.put(this.parsedData[e],8)}},e.prototype={addData:function(e){var r=new t(e);this.dataList.push(r),this.dataCache=null},isDark:function(t,e){if(0>t||this.moduleCount<=t||0>e||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,r){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++){this.modules[o]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[o][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,r),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=e.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,r)},setupPositionProbePattern:function(t,e){for(var r=-1;7>=r;r++)if(!(-1>=t+r||this.moduleCount<=t+r))for(var o=-1;7>=o;o++)-1>=e+o||this.moduleCount<=e+o||(this.modules[t+r][e+o]=r>=0&&6>=r&&(0==o||6==o)||o>=0&&6>=o&&(0==r||6==r)||r>=2&&4>=r&&o>=2&&4>=o)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;8>r;r++){this.makeImpl(!0,r);var o=f.getLostPoint(this);(0==r||t>o)&&(t=o,e=r)}return e},createMovieClip:function(t,e,r){var o=t.createEmptyMovieClip(e,r);this.make();for(var n=0;n<this.modules.length;n++)for(var i=1*n,a=0;a<this.modules[n].length;a++){var s=1*a;this.modules[n][a]&&(o.beginFill(0,100),o.moveTo(s,i),o.lineTo(s+1,i),o.lineTo(s+1,i+1),o.lineTo(s,i+1),o.endFill())}return o},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=0==t%2);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=0==e%2)},setupPositionAdjustPattern:function(){for(var t=f.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var o=t[e],n=t[r];if(null==this.modules[o][n])for(var i=-2;2>=i;i++)for(var a=-2;2>=a;a++)this.modules[o+i][n+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},setupTypeNumber:function(t){for(var e=f.getBCHTypeNumber(this.typeNumber),r=0;18>r;r++){var o=!t&&1==(1&e>>r);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=o}for(r=0;18>r;r++){o=!t&&1==(1&e>>r);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=o}},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,o=f.getBCHTypeInfo(r),n=0;15>n;n++){var i=!t&&1==(1&o>>n);6>n?this.modules[n][8]=i:8>n?this.modules[n+1][8]=i:this.modules[this.moduleCount-15+n][8]=i}for(n=0;15>n;n++){i=!t&&1==(1&o>>n);8>n?this.modules[8][this.moduleCount-n-1]=i:9>n?this.modules[8][15-n-1+1]=i:this.modules[8][15-n-1]=i}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,o=this.moduleCount-1,n=7,i=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var s=0;2>s;s++)if(null==this.modules[o][a-s]){var h=!1;i<t.length&&(h=1==(1&t[i]>>>n)),f.getMask(e,o,a-s)&&(h=!h),this.modules[o][a-s]=h,-1==--n&&(i++,n=7)}if(0>(o+=r)||this.moduleCount<=o){o-=r,r=-r;break}}}},e.PAD0=236,e.PAD1=17,e.createData=function(t,r,o){for(var a=n.getRSBlocks(t,r),s=new i,h=0;h<o.length;h++){var u=o[h];s.put(u.mode,4),s.put(u.getLength(),f.getLengthInBits(u.mode,t)),u.write(s)}var l=0;for(h=0;h<a.length;h++)l+=a[h].dataCount;if(s.getLengthInBits()>8*l)throw new Error("code length overflow. ("+s.getLengthInBits()+">"+8*l+")");for(s.getLengthInBits()+4<=8*l&&s.put(0,4);0!=s.getLengthInBits()%8;)s.putBit(!1);for(;!(s.getLengthInBits()>=8*l)&&(s.put(e.PAD0,8),!(s.getLengthInBits()>=8*l));)s.put(e.PAD1,8);return e.createBytes(s,a)},e.createBytes=function(t,e){for(var r=0,n=0,i=0,a=new Array(e.length),s=new Array(e.length),h=0;h<e.length;h++){var u=e[h].dataCount,l=e[h].totalCount-u;n=Math.max(n,u),i=Math.max(i,l),a[h]=new Array(u);for(var g=0;g<a[h].length;g++)a[h][g]=255&t.buffer[g+r];r+=u;var c=f.getErrorCorrectPolynomial(l),d=new o(a[h],c.getLength()-1).mod(c);s[h]=new Array(c.getLength()-1);for(g=0;g<s[h].length;g++){var p=g+d.getLength()-s[h].length;s[h][g]=p>=0?d.get(p):0}}var m=0;for(g=0;g<e.length;g++)m+=e[g].totalCount;var _=new Array(m),v=0;for(g=0;n>g;g++)for(h=0;h<e.length;h++)g<a[h].length&&(_[v++]=a[h][g]);for(g=0;i>g;g++)for(h=0;h<e.length;h++)g<s[h].length&&(_[v++]=s[h][g]);return _};for(var h={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},u={L:1,M:0,Q:3,H:2},l={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;f.getBCHDigit(e)-f.getBCHDigit(f.G15)>=0;)e^=f.G15<<f.getBCHDigit(e)-f.getBCHDigit(f.G15);return(t<<10|e)^f.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;f.getBCHDigit(e)-f.getBCHDigit(f.G18)>=0;)e^=f.G18<<f.getBCHDigit(e)-f.getBCHDigit(f.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return f.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case l.PATTERN000:return 0==(e+r)%2;case l.PATTERN001:return 0==e%2;case l.PATTERN010:return 0==r%3;case l.PATTERN011:return 0==(e+r)%3;case l.PATTERN100:return 0==(Math.floor(e/2)+Math.floor(r/3))%2;case l.PATTERN101:return 0==e*r%2+e*r%3;case l.PATTERN110:return 0==(e*r%2+e*r%3)%2;case l.PATTERN111:return 0==(e*r%3+(e+r)%2)%2;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new o([1],0),r=0;t>r;r++)e=e.multiply(new o([1,g.gexp(r)],0));return e},getLengthInBits:function(t,e){if(e>=1&&10>e)switch(t){case h.MODE_NUMBER:return 10;case h.MODE_ALPHA_NUM:return 9;case h.MODE_8BIT_BYTE:case h.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(27>e)switch(t){case h.MODE_NUMBER:return 12;case h.MODE_ALPHA_NUM:return 11;case h.MODE_8BIT_BYTE:return 16;case h.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(41>e))throw new Error("type:"+e);switch(t){case h.MODE_NUMBER:return 14;case h.MODE_ALPHA_NUM:return 13;case h.MODE_8BIT_BYTE:return 16;case h.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,o=0;e>o;o++)for(var n=0;e>n;n++){for(var i=0,a=t.isDark(o,n),s=-1;1>=s;s++)if(!(0>o+s||o+s>=e))for(var h=-1;1>=h;h++)0>n+h||n+h>=e||(0!=s||0!=h)&&a==t.isDark(o+s,n+h)&&i++;i>5&&(r+=3+i-5)}for(o=0;e-1>o;o++)for(n=0;e-1>n;n++){var u=0;t.isDark(o,n)&&u++,t.isDark(o+1,n)&&u++,t.isDark(o,n+1)&&u++,t.isDark(o+1,n+1)&&u++,(0==u||4==u)&&(r+=3)}for(o=0;e>o;o++)for(n=0;e-6>n;n++)t.isDark(o,n)&&!t.isDark(o,n+1)&&t.isDark(o,n+2)&&t.isDark(o,n+3)&&t.isDark(o,n+4)&&!t.isDark(o,n+5)&&t.isDark(o,n+6)&&(r+=40);for(n=0;e>n;n++)for(o=0;e-6>o;o++)t.isDark(o,n)&&!t.isDark(o+1,n)&&t.isDark(o+2,n)&&t.isDark(o+3,n)&&t.isDark(o+4,n)&&!t.isDark(o+5,n)&&t.isDark(o+6,n)&&(r+=40);var l=0;for(n=0;e>n;n++)for(o=0;e>o;o++)t.isDark(o,n)&&l++;return r+10*(Math.abs(100*l/e/e-50)/5)}},g={glog:function(t){if(1>t)throw new Error("glog("+t+")");return g.LOG_TABLE[t]},gexp:function(t){for(;0>t;)t+=255;for(;t>=256;)t-=255;return g.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},c=0;8>c;c++)g.EXP_TABLE[c]=1<<c;for(c=8;256>c;c++)g.EXP_TABLE[c]=g.EXP_TABLE[c-4]^g.EXP_TABLE[c-5]^g.EXP_TABLE[c-6]^g.EXP_TABLE[c-8];for(c=0;255>c;c++)g.LOG_TABLE[g.EXP_TABLE[c]]=c;o.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var n=0;n<t.getLength();n++)e[r+n]^=g.gexp(g.glog(this.get(r))+g.glog(t.get(n)));return new o(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=g.glog(this.get(0))-g.glog(t.get(0)),r=new Array(this.getLength()),n=0;n<this.getLength();n++)r[n]=this.get(n);for(n=0;n<t.getLength();n++)r[n]^=g.gexp(g.glog(t.get(n))+e);return new o(r,0).mod(t)}},n.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],n.getRSBlocks=function(t,e){var r=n.getRsBlockTable(t,e);if(null==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var o=r.length/3,i=[],a=0;o>a;a++)for(var s=r[3*a+0],h=r[3*a+1],u=r[3*a+2],l=0;s>l;l++)i.push(new n(h,u));return i},n.getRsBlockTable=function(t,e){switch(e){case u.L:return n.RS_BLOCK_TABLE[4*(t-1)+0];case u.M:return n.RS_BLOCK_TABLE[4*(t-1)+1];case u.Q:return n.RS_BLOCK_TABLE[4*(t-1)+2];case u.H:return n.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},i.prototype={get:function(t){var e=Math.floor(t/8);return 1==(1&this.buffer[e]>>>7-t%8)},put:function(t,e){for(var r=0;e>r;r++)this.putBit(1==(1&t>>>e-r-1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var d=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],p=function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){function e(t,e){var r=document.createElementNS("http://www.w3.org/2000/svg",t);for(var o in e)e.hasOwnProperty(o)&&r.setAttribute(o,e[o]);return r}var r=this._htOption,o=this._el,n=t.getModuleCount();Math.floor(r.width/n),Math.floor(r.height/n),this.clear();var i=e("svg",{viewBox:"0 0 "+String(n)+" "+String(n),width:"100%",height:"100%",fill:r.colorLight});i.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),o.appendChild(i),i.appendChild(e("rect",{fill:r.colorDark,width:"1",height:"1",id:"template"}));for(var a=0;n>a;a++)for(var s=0;n>s;s++)if(t.isDark(a,s)){var h=e("use",{x:String(a),y:String(s)});h.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),i.appendChild(h)}},t.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},t}(),m="svg"===document.documentElement.tagName.toLowerCase()?p:"undefined"!=typeof CanvasRenderingContext2D?function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}function e(t,e){var r=this;if(r._fFail=e,r._fSuccess=t,null===r._bSupportDataURI){var o=document.createElement("img"),n=function(){r._bSupportDataURI=!1,r._fFail&&_fFail.call(r)};return o.onabort=n,o.onerror=n,o.onload=function(){r._bSupportDataURI=!0,r._fSuccess&&r._fSuccess.call(r)},void(o.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")}!0===r._bSupportDataURI&&r._fSuccess?r._fSuccess.call(r):!1===r._bSupportDataURI&&r._fFail&&r._fFail.call(r)}if(this._android&&this._android<=2.1){var r=1/window.devicePixelRatio,o=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(t,e,n,i,a,s,h,u){if("nodeName"in t&&/img/i.test(t.nodeName))for(var l=arguments.length-1;l>=1;l--)arguments[l]=arguments[l]*r;else void 0===u&&(arguments[1]*=r,arguments[2]*=r,arguments[3]*=r,arguments[4]*=r);o.apply(this,arguments)}}var n=function(t,e){this._bIsPainted=!1,this._android=a(),this._htOption=e,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=e.width,this._elCanvas.height=e.height,t.appendChild(this._elCanvas),this._el=t,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return n.prototype.draw=function(t){var e=this._elImage,r=this._oContext,o=this._htOption,n=t.getModuleCount(),i=o.width/n,a=o.height/n,s=Math.round(i),h=Math.round(a);e.style.display="none",this.clear();for(var u=0;n>u;u++)for(var l=0;n>l;l++){var f=t.isDark(u,l),g=l*i,c=u*a;r.strokeStyle=f?o.colorDark:o.colorLight,r.lineWidth=1,r.fillStyle=f?o.colorDark:o.colorLight,r.fillRect(g,c,i,a),r.strokeRect(Math.floor(g)+.5,Math.floor(c)+.5,s,h),r.strokeRect(Math.ceil(g)-.5,Math.ceil(c)-.5,s,h)}this._bIsPainted=!0},n.prototype.makeImage=function(){this._bIsPainted&&e.call(this,t)},n.prototype.isPainted=function(){return this._bIsPainted},n.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},n.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},n}():function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){for(var e=this._htOption,r=this._el,o=t.getModuleCount(),n=Math.floor(e.width/o),i=Math.floor(e.height/o),a=['<table style="border:0;border-collapse:collapse;">'],s=0;o>s;s++){a.push("<tr>");for(var h=0;o>h;h++)a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+n+"px;height:"+i+"px;background-color:"+(t.isDark(s,h)?e.colorDark:e.colorLight)+';"></td>');a.push("</tr>")}a.push("</table>"),r.innerHTML=a.join("");var u=r.childNodes[0],l=(e.width-u.offsetWidth)/2,f=(e.height-u.offsetHeight)/2;l>0&&f>0&&(u.style.margin=f+"px "+l+"px")},t.prototype.clear=function(){this._el.innerHTML=""},t}();(r=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:u.H},"string"==typeof e&&(e={text:e}),e)for(var r in e)this._htOption[r]=e[r];"string"==typeof t&&(t=document.getElementById(t)),this._android=a(),this._el=t,this._oQRCode=null,this._oDrawing=new m(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)}).prototype.makeCode=function(t){this._oQRCode=new e(s(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._el.title=t,this._oDrawing.draw(this._oQRCode),this.makeImage()},r.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},r.prototype.clear=function(){this._oDrawing.clear()},r.CorrectLevel=u}()}});
//# sourceMappingURL=qrcode.bundle.js.map