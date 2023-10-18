import { useSelector } from 'react-redux'

function Model(){
    const modelStyle = useSelector((state) => state.styles.style.sections.sectionContentStyle.model)

    return(
        <model-viewer src="./Case_v22.glb" camera-controls shadow-intensity="0.36" exposure="0.34" tone-mapping="commerce" style={modelStyle}>
            <div className="progress-bar hide" slot="progress-bar">
                <div className="update-bar"></div>
            </div>
        </model-viewer>
    )
}

export default Model;