import styled  from '@emotion/styled'

export const container = styled.div<{
    width? : string | number,
    minWidth? : string | number,
    maxWidth? : string | number,
}>((props) => {
    return {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        gap: '2px',
        width: props.width,
        minWidth: props.maxWidth ? props.minWidth : '100px',
        maxWidth: props.maxWidth,

        '@media (max-width: 900px)' : {
            maxWidth: "100%"
        }
    }
})

export const label = styled.label(() => {
    return {
        pointerEvents: 'none',
        fontSize: '1rem',
        transition: 'all 0.2s',
        top: '12px',
        left: '10px',
        color: '#212529',
    }
})

const input = styled.input(() => ({
    borderRadius: '6px',
    border: '1px solid #ccc',
    padding: '4px 8px',
    height: '30px',
    transition: 'border-color 0.2s',
    fontSize: '1rem',
}));

export default input;