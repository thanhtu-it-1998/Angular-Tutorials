interface TPoint{
    x:number;
    y:number
}
let drawPoin = (point:TPoint)=>{
    console.log(`Draw a  point at X: ${point.x} and Y: ${point.y}` )
}

drawPoin({x:1,y:2});