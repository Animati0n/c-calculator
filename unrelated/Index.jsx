import { useEffect, useReducer, useRef, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Slide1 from "../QuestionSlide/Slide1";
import Slide2 from "../QuestionSlide/Slide2";
import Slide3 from "../QuestionSlide/Slide3";
import Slide4 from "../QuestionSlide/Slide4";
import Slide5 from "../QuestionSlide/Slide5";

const stateNow = {
    slide1: true,
    slide2: false,
    slide3: false,
    slide4: false,
    slide5: false,
    progress: false
}
function reducer(state, action) {
    switch (action.type) {
        case "slide":
            console.log("hello", action);
            switch (action.payload) {
                case "slide1":
                    return { ...state, slide1: false, slide2: true, progress: true }
                case "slide2":
                    return { ...state, slide2: false, slide3: true }
                case "slide3":
                    return { ...state, slide3: false, slide4: true }
                case "slide4":
                    return { ...state, slide4: false, slide5: true, progress: false }
                default:
                    return { ...state }
            }
        case "back":
            switch (action.payload) {
                case "slide4":
                    return { ...state, slide4: false, slide3: true }
                case "slide3":
                    return { ...state, slide3: false, slide2: true }
                case "slide2":
                    return { ...state, slide2: false, slide1: true }
                default:
                    return { ...state }
            }
        default:
            return { ...state }
    }
}

export default function Index() {
    const [slide, dispatch] = useReducer(reducer, stateNow)
    const [length, setLength] = useState('')
    const progressId = useRef()
    useEffect(() => {
        if (progressId.current && slide.slide3 || slide.slide4) {
            console.log(progressId.current.offsetWidth);
            const parentWidth = progressId.current.parentElement.offsetWidth;
            const currentWidth = progressId.current.offsetWidth;
            const percentage = (currentWidth / parentWidth) * 100;
            const newWidth = parseInt(percentage) + 30
            // progressId.current.style.width=newWidth+"%"
            setLength(newWidth + "%")
            // console.log("parent",parentWidth,"current:",currentWidth,"percentage",parseInt(percentage),"new ",newWidth,progressId.current.children);
        }
    })
    return (
        <>
            {/* ========= header Start ========= */}
            <Navbar />
            {/* ========= header end ========= */}
            <section className="text-center slide_sec">
                <div className="container">
                    {/* progress start */}
                    {slide.progress &&
                        (
                            <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12 progrss  mb-5 px-3 pt-3" >
                                <div className="progress">
                                    <div className="progress-bar" id="progressBar" ref={progressId} style={{ width: length }}>
                                        <p className="text-center prgrs_txt" id="progressBar_content">Progress {length || '30%'}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    {/* progress end */}
                    {/* slide-1 start */}
                    {slide.slide1 && <Slide1 dispatch={dispatch} />}
                    {/* slide-1 end */}
                    {/* slide-2 start */}
                    {slide.slide2 && <Slide2 dispatch={dispatch} />}
                    {/* slide-2 end */}
                    {/* slide-3 start */}
                    {slide.slide3 && <Slide3 dispatch={dispatch} />}
                    {/* slide-3 end */}
                    {/* slide-4 start */}
                    {slide.slide4 && <Slide4 dispatch={dispatch} />}
                    {/* slide-4 end */}
                    {/* slide-5 start */}
                    {slide.slide5 && <Slide5 />}
                    {/* slide-5 end */}
                </div>
            </section>
            {/* footer */}
            <Footer />
        </>

    )
}
