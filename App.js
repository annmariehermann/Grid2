// Create a draw component
var drawComponent = Ext.create('Ext.draw.Component', {
    viewBox: false
});

// Create a window to place the draw component in
Ext.create('Ext.Window', {
    width: 600,
    height: 400,
    layout: 'fit',
    items: [drawComponent]
}).show();

var back = drawComponent.surface.add({
    type: 'rect',
    stroke: '#FF711F',
    x: 0,
    y: 0,
    'stroke-width': 3,
    width: 600,
    height: 400
});
var back1 = drawComponent.surface.add({
    type: 'rect',
    stroke: '#FF711F',
    x: 0,
    y: 175,
    'stroke-width': 3,
    width: 600,
    height: 250
});
var sun = drawComponent.surface.add({
    type : "circle",
    x:300,
    y: 0,
    radius: 180,
    'fill' : '#FF7519',
    'fill-opacity' : "1",
    'opacity' : "0.6585366",
    'fill-rule' : 'nonzero',
    stroke : '#FF7519',
    'stroke-width': 4
});

var body = drawComponent.surface.add({
    type: 'ellipse',
    radiusX: 60,
    radiusY:40,
    x: 220,
    y: 245,
    radius: 20,
});
var neck = drawComponent.surface.add({
    type: 'rect',
    x: 161,
    y: 104,
    width: 20,
    height: 150
    
});

var head = drawComponent.surface.add({
    type: 'ellipse',
    radiusX: 30,
    radiusY:20,
    x: 152,
    y: 109,
    radius: 5,
});

var foot1 = drawComponent.surface.add({
    type: 'ellipse',
    radiusX: 15,
    radiusY:7,
    x: 180,
    y: 337,
    radius: 20,
});
var foot2 = drawComponent.surface.add({
    type: 'ellipse',
    radiusX: 15,
    radiusY:7,
    x: 201,
    y: 337,
    radius: 20,
});
var foot3 = drawComponent.surface.add({
    type: 'ellipse',
    radiusX: 15,
    radiusY:7,
    x: 231,
    y: 337,
    radius: 20,
});
var foot4 = drawComponent.surface.add({
    type: 'ellipse',
    radiusX: 15,
    radiusY:7,
    x: 250,
    y: 337,
    radius: 20,
});

var leg1 = drawComponent.surface.add({
    type: 'rect',
    x: 180,
    y: 260,
    width: 15,
    height: 80
});
var leg2 = drawComponent.surface.add({
    type: 'rect',
    x: 200,
    y: 260,
    width: 15,
    height: 80
});
var leg3 = drawComponent.surface.add({
    type: 'rect',
    x: 230,
    y: 260,
    width: 15,
    height: 80
});
var leg4 = drawComponent.surface.add({
    type: 'rect',
    x: 250,
    y: 260,
    width: 15,
    height: 80
});

var spot1 = drawComponent.surface.add({
    type: 'ellipse',
    radiusX: 13,
    radiusY:7,
    x: 220,
    y: 240,
    radius: 20,
});
var spot2 = drawComponent.surface.add({
    type: 'circle',
    x: 224,
    y: 238,
    radius: 6,
});

var spot3 = drawComponent.surface.add({
    type: 'ellipse',
    radiusX: 13,
    radiusY:7,
    x: 240,
    y: 265,
    radius: 20,
});

var spot4 = drawComponent.surface.add({
    type: 'circle',
    x: 251,
    y: 260,
    radius: 6,
});
var spot5 = drawComponent.surface.add({
    type: 'ellipse',
    radiusX: 13,
    radiusY:7,
    x: 260,
    y: 244,
    radius: 20,
});

var spot6 = drawComponent.surface.add({
    type: 'circle',
    x: 270,
    y: 240,
    radius: 6,
});

back.setAttributes({
    fill: '#FF8121'
}, true);
back1.setAttributes({
    fill: '#FF5A47'
}, true);
sun.setAttributes({
    fill: '#FF4F19'
}, true);
body.setAttributes({
    fill: '#C4BF1E'
}, true);
neck.setAttributes({
    fill: '#C4BF1E'
}, true);
head.setAttributes({
    fill: '#C4BF1E'
}, true);
leg1.setAttributes({
    fill: '#C4BF1E'
}, true);
leg2.setAttributes({
    fill: '#C4BF1E'
}, true);
leg3.setAttributes({
    fill: '#C4BF1E'
}, true);
leg4.setAttributes({
    fill: '#C4BF1E'
}, true);
foot1.setAttributes({
    fill: '#C4BF1E'
}, true);
foot2.setAttributes({
    fill: '#C4BF1E'
}, true);
foot3.setAttributes({
    fill: '#C4BF1E'
}, true);
foot4.setAttributes({
    fill: '#C4BF1E'
}, true);
spot1.setAttributes({
    fill: '#635233'
}, true);
spot2.setAttributes({
    fill: '#635233'
}, true);
spot3.setAttributes({
    fill: '#635233'
}, true);
spot4.setAttributes({
    fill: '#635233'
}, true);
spot5.setAttributes({
    fill: '#635233'
}, true);
spot6.setAttributes({
    fill: '#635233'
}, true);





