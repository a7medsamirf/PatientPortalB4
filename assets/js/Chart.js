new Chart(document.getElementById("bar"), {
    "type": "bar",
    "data": {
        "labels": ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Grey"],
        "datasets": [{
            "label": "My First Dataset",
            "data": [22, 33, 55, 32, 86, 23, 14],
            "fill": false,
            "backgroundColor": "#00c851",
            "borderWidth": 0
        }]
    },
    "options": {
        "responsive": false,
        "legend": {
            "display": false,
        },
        "scales": {
            "xAxes": [{
                "gridLines": {
                    "display": false,
                    "drawBorder": false,
                },
                "ticks": {
                    "display": false,
                    "beginAtZero": true
                }
            }],
            "yAxes": [{
                "gridLines": {
                    "display": false,
                    "drawBorder": false,
                },
                "ticks": {
                    "display": false,
                }
            }],
        }
    }
});


new Chart(document.getElementById("bar2"), {
    "type": "bar",
    "data": {
        "labels": ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Grey"],
        "datasets": [{
            "label": "My First Dataset",
            "data": [35, 21, 42, 59, 50, 62, 90],
            "fill": false,
            "backgroundColor": "#ff3547",
            "borderWidth": 0
        }]
    },
    "options": {
        "responsive": false,
        "legend": {
            "display": false,
        },
        "scales": {
            "xAxes": [{
                "gridLines": {
                    "display": false,
                    "drawBorder": false,
                },
                "ticks": {
                    "display": false,
                    "beginAtZero": true
                }
            }],
            "yAxes": [{
                "gridLines": {
                    "display": false,
                    "drawBorder": false,
                },
                "ticks": {
                    "display": false,
                }
            }],
        }
    }
});

new Chart(document.getElementById("bar3"), {
    "type": "bar",
    "data": {
        "labels": ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Grey"],
        "datasets": [{
            "label": "My First Dataset",
            "data": [22, 33, 55, 32, 86, 23, 14],
            "fill": false,
            "backgroundColor": "#33b5e5",
            "borderWidth": 0
        }]
    },
    "options": {
        "responsive": false,
        "legend": {
            "display": false,
        },
        "scales": {
            "xAxes": [{
                "gridLines": {
                    "display": false,
                    "drawBorder": false,
                },
                "ticks": {
                    "display": false,
                    "beginAtZero": true
                }
            }],
            "yAxes": [{
                "gridLines": {
                    "display": false,
                    "drawBorder": false,
                },
                "ticks": {
                    "display": false,
                }
            }],
        }
    }
});

new Chart(document.getElementById("bar4"), {
    "type": "bar",
    "data": {
        "labels": ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Grey"],
        "datasets": [{
            "label": "My First Dataset",
            "data": [20, 33, 45, 34, 71, 54, 44],
            "fill": false,
            "backgroundColor": "#fb3",
            "borderWidth": 0
        }]
    },
    "options": {
        "responsive": false,
        "legend": {
            "display": false,
        },
        "scales": {
            "xAxes": [{
                "gridLines": {
                    "display": false,
                    "drawBorder": false,
                },
                "ticks": {
                    "display": false,
                    "beginAtZero": true
                }
            }],
            "yAxes": [{
                "gridLines": {
                    "display": false,
                    "drawBorder": false,
                },
                "ticks": {
                    "display": false,
                }
            }],
        }
    }
});

new Chart(document.getElementById("bar5"), {
    "type": "bar",
    "data": {
        "labels": ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Grey"],
        "datasets": [{
            "label": "My First Dataset",
            "data": [60, 21, 72, 65, 50, 40, 35],
            "fill": false,
            "backgroundColor": "#ff3547",
            "borderWidth": 0
        }]
    },
    "options": {
        "responsive": false,
        "legend": {
            "display": false,
        },
        "scales": {
            "xAxes": [{
                "gridLines": {
                    "display": false,
                    "drawBorder": false,
                },
                "ticks": {
                    "display": false,
                    "beginAtZero": true
                }
            }],
            "yAxes": [{
                "gridLines": {
                    "display": false,
                    "drawBorder": false,
                },
                "ticks": {
                    "display": false,
                }
            }],
        }
    }
});

new Chart(document.getElementById("bar6"), {
    "type": "bar",
    "data": {
        "labels": ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Grey"],
        "datasets": [{
            "label": "My First Dataset",
            "data": [21, 59, 90, 35, 50, 42, 62],
            "fill": false,
            "backgroundColor": "#00c851",
            "borderWidth": 0
        }]
    },
    "options": {
        "responsive": false,
        "legend": {
            "display": false,
        },
        "scales": {
            "xAxes": [{
                "gridLines": {
                    "display": false,
                    "drawBorder": false,
                },
                "ticks": {
                    "display": false,
                    "beginAtZero": true
                }
            }],
            "yAxes": [{
                "gridLines": {
                    "display": false,
                    "drawBorder": false,
                },
                "ticks": {
                    "display": false,
                }
            }],
        }
    }
});


jQuery(function ($) {
    //pie
    var ctxP = document.getElementById("pieChart2").getContext('2d');
    var myPieChart = new Chart(ctxP, {
        type: 'pie',
        data: {
            labels: ["Red", "Green", "Yellow"],
            datasets: [{
                data: [100, 100, 100],
                backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
                hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
            }]
        },
        options: {
            responsive: true
        }
    });
});

jQuery(function ($) {
    //line
    var ctxL = document.getElementById("lineChart").getContext('2d');
    var myLineChart = new Chart(ctxL, {
        type: 'line',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                /*         {
                          label: "My First dataset",
                          data: [65, 59, 80, 81, 56, 55, 40],
                          backgroundColor: [
                            'rgba(105, 0, 132, .2)',
                          ],
                          borderColor: [
                            'rgba(200, 99, 132, .7)',
                          ],
                          borderWidth: 2
                        }, */
                {
                    label: "72 bmp (Average)",
                    data: [28, 48, 40, 19, 86, 27, 90],
                    backgroundColor: [
                        'rgba(0, 137, 132, .2)',
                    ],
                    borderColor: [
                        'rgba(0, 10, 130, .7)',
                    ],
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true
        }
    });
});