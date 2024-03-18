import React from 'react'
import ImageModal from './image-modal'

export default function ClickableImage(props) {
    return (
        <div>
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target={`#picture${props.index}`}>
                <img src={props.image} className="img-fluid mb-3" />
            </button>
            <ImageModal index={props.index} image={props.image} />
        </div>
    )
}
