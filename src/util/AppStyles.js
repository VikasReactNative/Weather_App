import { colors } from "./Colors"

export const safeAreaStyle={ flex: 1, backgroundColor: `rgba(42, 0, 194, 0.74)` }
export const imgHW = (h) => {
    return {
        height: h,
        width: h
    }
}
export const opcbg=(opc=0.74)=>{
    return{
        backgroundColor:`rgba(255, 255, 255, ${opc})`
    }
}
export const circleView=(h)=>{return{height: h, width: h, borderRadius: h / 2}}
export const centerStyle = {
    justifyContent: 'center',
    alignItems: 'center'
}
export const shadow = {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
}