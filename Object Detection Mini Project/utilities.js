export const drawRect=(detections,ctx)=>{
    detections.forEach(prediction=>{
        const[x,y,width,height]=prediction['bbox'];
        const text=prediction['class'];
        const color='#'+Math.floor(Math.random()*16777215)
        ctx.strokeStyle=color
        ctx.font='18px Arial'
        ctx.fillStyle=color

        ctx.beginPath()
        ctx.fillText(text,x,y)
        ctx.rect(x,y,width,height)
        ctx.stroke()
    })
}
