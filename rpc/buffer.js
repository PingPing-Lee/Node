// 使用 Buffer.from 直接进行二进制赋值
const buffer1 = Buffer.from('ppl');
console.log(buffer1)


const buffer2 = Buffer.from([1,2,3,4]);
buffer2.writeInt8(12,1);
console.log(buffer2);
buffer2.writeInt16BE(512,2);
console.log(buffer2);
buffer2.writeUInt16LE(512,2);
console.log(buffer2);


// 创建一个长度为 10 的 Buffer：
const buffer3 = Buffer.alloc(20);
// 写入
buffer3.write('hello');
console.log(buffer3)
