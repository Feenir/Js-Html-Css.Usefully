//Sliders!!Ползунки!!
const roomRangeSlider = document.getElementById('slider-range-room');
if (roomRangeSlider) {
    noUiSlider.create(roomRangeSlider, {
        start: 51,
        step: 1,
        tooltips: wNumb({ decimals: 0 }),
        connect: 'lower',
        range: {
            'min': [1],
            'max': [100]
        }
    });
    const inputRoom = document.getElementById('input-range-room');
    roomRangeSlider.noUiSlider.on('update', function(values, handle) {
        inputRoom.value = Math.round(values);
    });

}