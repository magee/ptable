/*globals define*/
define(function(require, exports, module) {
  'use strict';
  // import dependencies
  var Engine = require('famous/core/Engine');
  var Surface = require('famous/core/Surface');
  var Modifier = require('famous/core/Modifier');
  var Transform = require('famous/core/Transform');

  // create the main context
  var mainContext = Engine.createContext();

  // user-specific configurations
  var options = {};

//TODO: move data to persistent data store

  var elements = {
    H: {
       name             : 'Helium',
       atomicNumber     : 1,
       symbol           : 'H',
       atomicWeight     : '1.0078',
       block            : 's',
       classification   : ['Other non-metals'],
       naturalState     : 'gas',
       stableStructure  : '',
       period           : 1,
       group            : 1,
       location         : [1,1,1]
     },
    Li: {
       name             : 'Lithium',
       atomicNumber     : 3,
       symbol           : 'Li',
       atomicWeight     : '6.938',
       block            : 's',
       classification   : ['Alkalai Metals'],
       naturalState     : 'solid',
       stableStructure  : 'BCC',
       period           : 2,
       group            : 1,
       location         : [1,2,1]
      },
    Na: {
       name             : 'Sodium',
       atomicNumber     : 11,
       symbol           : 'Na',
       atomicWeight     : '22.990',
       block            : 's',
       classification   : ['Alkalai Metals'],
       naturalState     : 'solid',
       stableStructure  : 'BCC',
       period           : 3,
       group            : 1,
       location         : [1,3,1]
     },
    K: {
       name             : 'Potassium',
       atomicNumber     : 19,
       symbol           : 'K',
       atomicWeight     : '39.098',
       block            : 's',
       classification   : ['Alkalai Metals'],
       naturalState     : 'solid',
       stableStructure  : 'BCC',
       period           : 4,
       group            : 1,
       location         : [1,4,1]
     },
    Rb: {
       name             : 'Rubidium',
       atomicNumber     : 37,
       symbol           : 'Rb',
       atomicWeight     : '85.468',
       block            : 's',
       classification   : ['Alkalai Metals'],
       naturalState     : 'solid',
       stableStructure  : 'BCC',
       period           : 5,
       group            : 1,
       location         : [1,5,1]
     },
    Cs: {
       name             : 'Cesium',
       atomicNumber     : 55,
       symbol           : 'Cs',
       atomicWeight     : '132.91',
       block            : 's',
       classification   : ['Alkalai Metals'],
       naturalState     : 'solid',
       stableStructure  : 'BCC',
       period           : 6,
       group            : 1,
       location         : [1,6,1]
     },
    Fr: {
       name             : 'Francium',
       atomicNumber     : 87,
       symbol           : 'Fr',
       atomicWeight     : '223',
       block            : 's',
       classification   : ['Alkalai Metals'],
       naturalState     : 'solid',
       stableStructure  : 'UNK',
       period           : 7,
       group            : 1,
       location         : [1,7,1]
     },
    Be: {
       name             : 'Beryllium',
       atomicNumber     : 4,
       symbol           : 'Be',
       atomicWeight     : '9.0122',
       block            : 's',
       classification   : ['Alkaline Earth Metals'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 2,
       group            : 2,
       location         : [1,2,2]
     },
    Mg: {
       name             : 'Magnesium',
       atomicNumber     : 12,
       symbol           : 'Mg',
       atomicWeight     : '24.305',
       block            : 's',
       classification   : ['Alkaline Earth Metals'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 3,
       group            : 2,
       location         : [1,3,2]
     },
    Ca: {
       name             : 'Calcium',
       atomicNumber     : 20,
       symbol           : 'Ca',
       atomicWeight     : '40.078',
       block            : 's',
       classification   : ['Alkaline Earth Metals'],
       naturalState     : 'solid',
       stableStructure  : 'FCC',
       period           : 4,
       group            : 2,
       location         : [1,4,2]
     },
    Sr: {
       name             : 'Strontium',
       atomicNumber     : 38,
       symbol           : 'Sr',
       atomicWeight     : '87.62',
       block            : 's',
       classification   : ['Alkaline Earth Metals'],
       naturalState     : 'solid',
       stableStructure  : 'FCC',
       period           : 5,
       group            : 2,
       location         : [1,5,2]
     },
    Ba: {
       name             : 'Barium',
       atomicNumber     : 56,
       symbol           : 'Ba',
       atomicWeight     : '137.33',
       block            : 's',
       classification   : ['Alkaline Earth Metals'],
       naturalState     : 'solid',
       stableStructure  : 'BCC',
       period           : 6,
       group            : 2,
       location         : [1,6,2]
     },
    Ra: {
       name             : 'Radium',
       atomicNumber     : 88,
       symbol           : 'Ra',
       atomicWeight     : '226',
       block            : 's',
       classification   : ['Alkaline Earth Metals'],
       naturalState     : 'solid',
       stableStructure  : 'BCC',
       period           : 7,
       group            : 2,
       location         : [1,7,2]
     },
    Sc: {
       name             : 'Scandium',
       atomicNumber     : 21,
       symbol           : 'Sc',
       atomicWeight     : '44.956',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 4,
       group            : 3,
       location         : [1,4,3]
     },
    Y: {
       name             : 'Yttrium',
       atomicNumber     : 39,
       symbol           : 'Y',
       atomicWeight     : '88.906',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 5,
       group            : 3,
       location         : [1,5,3]
     },
    Ti: {
       name             : 'Titanium',
       atomicNumber     : 22,
       symbol           : 'Ti',
       atomicWeight     : '47.867',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 4,
       group            : 4,
       location         : [1,4,4]
     },
    Zr: {
       name             : 'Zirconium',
       atomicNumber     : 40,
       symbol           : 'Zr',
       atomicWeight     : '91.224',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 5,
       group            : 4,
       location         : [1,5,4]
     },
    Hf: {
       name             : 'Hafnium',
       atomicNumber     : 72,
       symbol           : 'Hf',
       atomicWeight     : '178.49',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 6,
       group            : 4,
       location         : [1,6,4]
     },
    Rf: {
       name             : 'Rutherfordium',
       atomicNumber     : 104,
       symbol           : 'Rf',
       atomicWeight     : '261',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : '',
       stableStructure  : '',
       period           : 7,
       group            : 4,
       location         : [1,7,4]
     },
    V: {
       name             : 'Vanadium',
       atomicNumber     : 23,
       symbol           : 'V',
       atomicWeight     : '50.941',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'BCC',
       period           : 4,
       group            : 5,
       location         : [1,4,5]
     },
    Nb: {
       name             : 'Niobium',
       atomicNumber     : 41,
       symbol           : 'Nb',
       atomicWeight     : '92.906',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'BCC',
       period           : 5,
       group            : 5,
       location         : [1,5,5]
     },
    Ta: {
       name             : 'Tantalum',
       atomicNumber     : 73,
       symbol           : 'Ta',
       atomicWeight     : '180.95',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'BCC',
       period           : 6,
       group            : 5,
       location         : [1,6,5]
     },
    Db: {
       name             : 'Dubnium',
       atomicNumber     : 104,
       symbol           : 'Db',
       atomicWeight     : '262',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : '',
       stableStructure  : '',
       period           : 7,
       group            : 5,
       location         : [1,7,5]
     },
    Cr: {
       name             : 'Chromium',
       atomicNumber     : 24,
       symbol           : 'Cr',
       atomicWeight     : '51.996',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'BCC',
       period           : 4,
       group            : 6,
       location         : [1,4,6]
     },
    Mo: {
       name             : 'Molybdenum',
       atomicNumber     : 42,
       symbol           : 'Mo',
       atomicWeight     : '95.96',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'BCC',
       period           : 5,
       group            : 6,
       location         : [1,5,6]
     },
    W: {
       name             : 'Tungsten',
       atomicNumber     : 74,
       symbol           : 'W',
       atomicWeight     : '183.84',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'BCC',
       period           : 6,
       group            : 6,
       location         : [1,6,6]
     },
    Sg: {
       name             : 'Seaborgium',
       atomicNumber     : 106,
       symbol           : 'Sg',
       atomicWeight     : '266',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : '',
       stableStructure  : '',
       period           : 7,
       group            : 6,
       location         : [1,7,6]
     },
    Mn: {
       name             : 'Manganese',
       atomicNumber     : 25,
       symbol           : 'Mn',
       atomicWeight     : '54.938',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'BCC',
       period           : 4,
       group            : 7,
       location         : [1,4,7]
     },
    Tc: {
       name             : 'Technetium',
       atomicNumber     : 43,
       symbol           : 'Tc',
       atomicWeight     : '98.9062',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 5,
       group            : 7,
       location         : [1,5,7]
     },
    Re: {
       name             : 'Rhenium',
       atomicNumber     : 74,
       symbol           : 'Re',
       atomicWeight     : '186.21',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 6,
       group            : 7,
       location         : [1,6,7]
     },
    Bh: {
       name             : 'Behrium',
       atomicNumber     : 107,
       symbol           : 'Bh',
       atomicWeight     : '265',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : '',
       stableStructure  : '',
       period           : 7,
       group            : 7,
       location         : [1,7,7]
     },
    Fe: {
       name             : 'Iron',
       atomicNumber     : 26,
       symbol           : 'Fe',
       atomicWeight     : '55.845',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'BCC',
       period           : 4,
       group            : 8,
       location         : [1,4,8]
     },
    Ru: {
       name             : 'Ruthenium',
       atomicNumber     : 44,
       symbol           : 'Ru',
       atomicWeight     : '101.07',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 5,
       group            : 8,
       location         : [1,5,8]
     },
    Os: {
       name             : 'Osmium',
       atomicNumber     : 76,
       symbol           : 'Os',
       atomicWeight     : '190.23',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 6,
       group            : 8,
       location         : [1,6,8]
     },
    Hs: {
       name             : 'Hassium',
       atomicNumber     : 108,
       symbol           : 'Hs',
       atomicWeight     : '269',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : '',
       stableStructure  : '',
       period           : 7,
       group            : 8,
       location         : [1,7,8]
     },
    Co: {
       name             : 'Cobalt',
       atomicNumber     : 27,
       symbol           : 'Co',
       atomicWeight     : '58.933',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 4,
       group            : 9,
       location         : [1,4,9]
     },
    Rh: {
       name             : 'Rhodium',
       atomicNumber     : 45,
       symbol           : 'Rh',
       atomicWeight     : '102.91',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'FCC',
       period           : 5,
       group            : 9,
       location         : [1,5,9]
     },
    Ir: {
       name             : 'Iridium',
       atomicNumber     : 77,
       symbol           : 'Ir',
       atomicWeight     : '192.22',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'FCC',
       period           : 6,
       group            : 9,
       location         : [1,6,9]
     },
    Mt: {
       name             : 'Meitnerium',
       atomicNumber     : 109,
       symbol           : 'Mt',
       atomicWeight     : '268',
       block            : 'd',
       classification   : ['Unknown Properties'],
       naturalState     : '',
       stableStructure  : '',
       period           : 7,
       group            : 9,
       location         : [1,7,9]
     },
    Ni: {
       name             : 'Nickel',
       atomicNumber     : 28,
       symbol           : 'Ni',
       atomicWeight     : '58.693',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'FCC',
       period           : 4,
       group            : 10,
       location         : [1,4,10]
     },
    Pd: {
       name             : 'Palladium',
       atomicNumber     : 46,
       symbol           : 'Pd',
       atomicWeight     : '106.42',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'FCC',
       period           : 5,
       group            : 10,
       location         : [1,5,10]
     },
    Pt: {
       name             : 'Platinum',
       atomicNumber     : 78,
       symbol           : 'Pt',
       atomicWeight     : '195.08',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'FCC',
       period           : 6,
       group            : 10,
       location         : [1,6,10]
     },
    Ds: {
       name             : 'Damstadtium',
       atomicNumber     : 110,
       symbol           : 'Ds',
       atomicWeight     : '268',
       block            : 'd',
       classification   : ['Unknown Properties'],
       naturalState     : '',
       stableStructure  : '',
       period           : 7,
       group            : 10,
       location         : [1,7,10]
     },
    Cu: {
       name             : 'Copper',
       atomicNumber     : 29,
       symbol           : 'Cu',
       atomicWeight     : '63.546',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'FCC',
       period           : 4,
       group            : 11,
       location         : [1,4,11]
     },
    Ag: {
       name             : 'Silver',
       atomicNumber     : 47,
       symbol           : 'Ag',
       atomicWeight     : '107.87',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'FCC',
       period           : 5,
       group            : 11,
       location         : [1,5,11]
     },
    Au: {
       name             : 'Gold',
       atomicNumber     : 79,
       symbol           : 'Au',
       atomicWeight     : '196.97',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'FCC',
       period           : 6,
       group            : 11,
       location         : [1,6,11]
     },
    Rg: {
       name             : 'Roentgenium',
       atomicNumber     : 111,
       symbol           : 'Rg',
       atomicWeight     : '268',
       block            : 'd',
       classification   : ['Unknown Properties'],
       naturalState     : '',
       stableStructure  : '',
       period           : 7,
       group            : 11,
       location         : [1,7,11]
     },
    Zn: {
       name             : 'Zinc',
       atomicNumber     : 30,
       symbol           : 'Zn',
       atomicWeight     : '65.38',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 4,
       group            : 12,
       location         : [1,4,12]
     },
    Cd: {
       name             : 'Cadmium',
       atomicNumber     : 48,
       symbol           : 'Cd',
       atomicWeight     : '112.41',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 5,
       group            : 12,
       location         : [1,5,12]
     },
    Hg: {
       name             : 'Mercury',
       atomicNumber     : 80,
       symbol           : 'Hg',
       atomicWeight     : '200.59',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : 'liquid',
       stableStructure  : '',
       period           : 6,
       group            : 12,
       location         : [1,6,12]
     },
    Cn: {
       name             : 'Copernicium',
       atomicNumber     : 112,
       symbol           : 'Cn',
       atomicWeight     : '268',
       block            : 'd',
       classification   : ['Transition Metals'],
       naturalState     : '',
       stableStructure  : '',
       period           : 7,
       group            : 12,
       location         : [1,7,12],
       previousName     : 'Uub'
     },
    B: {
       name             : 'Boron',
       atomicNumber     : 5,
       symbol           : 'B',
       atomicWeight     : '10.805',
       block            : '',
       classification   : ['Metalloids'],
       naturalState     : 'solid',
       stableStructure  : 'RHOM',
       period           : 2,
       group            : 13,
       location         : [1,2,13]
     },
    Al: {
       name             : 'Aluminum',
       atomicNumber     : 13,
       symbol           : 'Al',
       atomicWeight     : '26.982',
       block            : '',
       classification   : ['Post-Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'FCC',
       period           : 3,
       group            : 13,
       location         : [1,3,13]
     },
    Ga: {
       name             : 'Gallium',
       atomicNumber     : 31,
       symbol           : 'Ga',
       atomicWeight     : '69.723',
       block            : '',
       classification   : ['Post-Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'ORTHO',
       period           : 4,
       group            : 13,
       location         : [1,4,13]
     },
    In: {
       name             : 'Indium',
       atomicNumber     : 49,
       symbol           : 'In',
       atomicWeight     : '114.82',
       block            : '',
       classification   : ['Post-Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'TETRA',
       period           : 5,
       group            : 13,
       location         : [1,5,13]
     },
    Tl: {
       name             : 'Thallium',
       atomicNumber     : 81,
       symbol           : 'Tl',
       atomicWeight     : '204.38',
       block            : '',
       classification   : ['Post-Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 6,
       group            : 13,
       location         : [1,6,13]
     },
    Uut: {
       name             : 'Ununtrium',
       atomicNumber     : 113,
       symbol           : 'Uut',
       atomicWeight     : '268',
       block            : '',
       classification   : ['Unknown Properties'],
       naturalState     : '',
       stableStructure  : '',
       period           : 7,
       group            : 13,
       location         : [1,7,13]
     },
    C: {
       name             : 'Carbon',
       atomicNumber     : 6,
       symbol           : 'C',
       atomicWeight     : '12.009',
       block            : '',
       classification   : ['Other non-metals'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 2,
       group            : 14,
       location         : [1,2,14]
     },
    Si: {
       name             : 'Silicon',
       atomicNumber     : 14,
       symbol           : 'Si',
       atomicWeight     : '28.084',
       block            : '',
       classification   : ['Metalloids'],
       naturalState     : 'solid',
       stableStructure  : 'FCC',
       period           : 3,
       group            : 14,
       location         : [1,3,14]
     },
    Ge: {
       name             : 'Germanium',
       atomicNumber     : 32,
       symbol           : 'Ge',
       atomicWeight     : '72.63',
       block            : '',
       classification   : ['Metalloids'],
       naturalState     : 'solid',
       stableStructure  : 'FCC',
       period           : 4,
       group            : 14,
       location         : [1,4,14]
     },
    Sn: {
       name             : 'Tin',
       atomicNumber     : 50,
       symbol           : 'Sn',
       atomicWeight     : '118.71',
       block            : '',
       classification   : ['Post-Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'TETRA',
       period           : 5,
       group            : 14,
       location         : [1,5,14]
     },
    Pb: {
       name             : 'Lead',
       atomicNumber     : 82,
       symbol           : 'Pb',
       atomicWeight     : '207.2',
       block            : '',
       classification   : ['Post-Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'FCC',
       period           : 6,
       group            : 14,
       location         : [1,6,14]
     },
    Fl: {
       name             : 'Flerovium',
       atomicNumber     : 114,
       symbol           : 'Fl',
       atomicWeight     : '268',
       block            : '',
       classification   : ['Unknown Properties'],
       naturalState     : '',
       stableStructure  : '',
       period           : 7,
       group            : 14,
       location         : [1,7,14]
     },
    N: {
       name             : 'Nitrogen',
       atomicNumber     : 7,
       symbol           : 'N',
       atomicWeight     : '14.006',
       block            : '',
       classification   : ['Other non-metals'],
       naturalState     : 'gas',
       stableStructure  : '',
       period           : 2,
       group            : 15,
       location         : [1,2,15]
     },
    P: {
       name             : 'Phosphorous',
       atomicNumber     : 15,
       symbol           : 'P',
       atomicWeight     : '30.974',
       block            : '',
       classification   : ['Other non-metals'],
       naturalState     : 'solid',
       stableStructure  : 'CUBIC',
       period           : 3,
       group            : 15,
       location         : [1,3,15]
     },
    As: {
       name             : 'Arsenic',
       atomicNumber     : 33,
       symbol           : 'As',
       atomicWeight     : '74.922',
       block            : '',
       classification   : ['Metalloids'],
       naturalState     : 'solid',
       stableStructure  : 'RHOM',
       period           : 4,
       group            : 15,
       location         : [1,4,15]
     },
    Sb: {
       name             : 'Antimony',
       atomicNumber     : 51,
       symbol           : 'Sb',
       atomicWeight     : '121.76',
       block            : '',
       classification   : ['Metalloids'],
       naturalState     : 'solid',
       stableStructure  : 'RHOM',
       period           : 5,
       group            : 15,
       location         : [1,5,15]
     },
    Bi: {
       name             : 'Bismuth',
       atomicNumber     : 83,
       symbol           : 'Bi',
       atomicWeight     : '208.98',
       block            : '',
       classification   : ['Post-Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'RHOM',
       period           : 6,
       group            : 15,
       location         : [1,6,15]
     },
    Uup: {
       name             : 'Ununpentium',
       atomicNumber     : 115,
       symbol           : 'Uup',
       atomicWeight     : '268',
       block            : '',
       classification   : ['Unknown Properties'],
       naturalState     : '',
       stableStructure  : '',
       period           : 7,
       group            : 15,
       location         : [1,7,15]
     },
    O: {
       name             : 'Oxygen',
       atomicNumber     : 8,
       symbol           : 'O',
       atomicWeight     : '15.999',
       block            : '',
       classification   : ['Other non-metals'],
       naturalState     : 'gas',
       stableStructure  : '',
       period           : 2,
       group            : 16,
       location         : [1,2,16]
     },
    S: {
       name             : 'Sulfur',
       atomicNumber     : 16,
       symbol           : 'S',
       atomicWeight     : '32.059',
       block            : '',
       classification   : ['Other non-metals'],
       naturalState     : 'solid',
       stableStructure  : 'ORTHO',
       period           : 3,
       group            : 16,
       location         : [1,3,16]
     },
    Se: {
       name             : 'Selenium',
       atomicNumber     : 34,
       symbol           : 'Se',
       atomicWeight     : '78.96',
       block            : '',
       classification   : ['Other non-metals'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 4,
       group            : 16,
       location         : [1,4,16]
     },
    Te: {
       name             : 'Tellurium',
       atomicNumber     : 52,
       symbol           : 'Te',
       atomicWeight     : '127.60',
       block            : '',
       classification   : ['Metalloids'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 5,
       group            : 16,
       location         : [1,5,16]
     },
    Po: {
       name             : 'Polonium',
       atomicNumber     : 84,
       symbol           : 'Po',
       atomicWeight     : '209',
       block            : '',
       classification   : ['Post-Transition Metals'],
       naturalState     : 'solid',
       stableStructure  : 'CUBIC',
       period           : 6,
       group            : 16,
       location         : [1,6,16]
     },
    Lv: {
       name             : 'Livermorium',
       atomicNumber     : 116,
       symbol           : 'Lv',
       atomicWeight     : '268',
       block            : '',
       classification   : ['Unknown Properties'],
       naturalState     : '',
       stableStructure  : '',
       period           : 7,
       group            : 16,
       location         : [1,7,16]
     },
    F: {
       name             : 'Fluorine',
       atomicNumber     : 8,
       symbol           : 'F',
       atomicWeight     : '18.998',
       block            : '',
       classification   : ['Halogens'],
       naturalState     : 'gas',
       stableStructure  : '',
       period           : 2,
       group            : 17,
       location         : [1,2,17]
     },
    Cl: {
       name             : 'Chlorine',
       atomicNumber     : 17,
       symbol           : 'Cl',
       atomicWeight     : '35.446',
       block            : '',
       classification   : ['Halogens'],
       naturalState     : 'gas',
       stableStructure  : '',
       period           : 3,
       group            : 17,
       location         : [1,3,17]
     },
    Br: {
       name             : 'Bromine',
       atomicNumber     : 35,
       symbol           : 'Br',
       atomicWeight     : '79.904',
       block            : '',
       classification   : ['Halogens'],
       naturalState     : 'liquid',
       stableStructure  : '',
       period           : 4,
       group            : 17,
       location         : [1,4,17]
     },
    I: {
       name             : 'Iodine',
       atomicNumber     : 53,
       symbol           : 'I',
       atomicWeight     : '126.90',
       block            : '',
       classification   : ['Halogens'],
       naturalState     : 'solid',
       stableStructure  : 'ORTHO',
       period           : 5,
       group            : 17,
       location         : [1,5,17]
     },
    At: {
       name             : 'Astatine',
       atomicNumber     : 85,
       symbol           : 'At',
       atomicWeight     : '210',
       block            : '',
       classification   : ['Halogens'],
       naturalState     : 'solid',
       stableStructure  : 'UNK',
       period           : 6,
       group            : 17,
       location         : [1,6,17]
     },
    Uus: {
       name             : 'Ununseptium',
       atomicNumber     : 117,
       symbol           : 'Uus',
       atomicWeight     : '268',
       block            : '',
       classification   : ['Unknown Properties'],
       naturalState     : '',
       stableStructure  : '',
       period           : 7,
       group            : 17,
       location         : [1,7,17]
     },
    He: {
       name             : 'Helium',
       atomicNumber     : 2,
       symbol           : 'He',
       atomicWeight     : '4.0026',
       block            : 's',
       classification   : ['Noble Gases'],
       naturalState     : 'gas',
       stableStructure  : '',
       period           : 1,
       group            : 18,
       location         : [1,1,18]
     },
    Ne: {
       name             : 'Neon',
       atomicNumber     : 10,
       symbol           : 'Ne',
       atomicWeight     : '20.180',
       block            : '',
       classification   : ['Noble Gases'],
       naturalState     : 'gas',
       stableStructure  : '',
       period           : 2,
       group            : 18,
       location         : [1,2,18]
     },
    Ar: {
       name             : 'Argon',
       atomicNumber     : 18,
       symbol           : 'Ar',
       atomicWeight     : '39.948',
       block            : '',
       classification   : ['Noble Gases'],
       naturalState     : 'gas',
       stableStructure  : '',
       period           : 3,
       group            : 18,
       location         : [1,3,18]
     },
    Kr: {
       name             : 'Krypton',
       atomicNumber     : 36,
       symbol           : 'Kr',
       atomicWeight     : '83.798',
       block            : '',
       classification   : ['Noble Gases'],
       naturalState     : 'gas',
       stableStructure  : '',
       period           : 4,
       group            : 18,
       location         : [1,4,18]
     },
    Xe: {
       name             : 'Xenon',
       atomicNumber     : 54,
       symbol           : 'Xe',
       atomicWeight     : '131.29',
       block            : '',
       classification   : ['Noble Gases'],
       naturalState     : 'gas',
       stableStructure  : '',
       period           : 5,
       group            : 18,
       location         : [1,5,18]
     },
    Rn: {
       name             : 'Radon',
       atomicNumber     : 86,
       symbol           : 'Rn',
       atomicWeight     : '222',
       block            : '',
       classification   : ['Noble Gases'],
       naturalState     : 'gas',
       stableStructure  : '',
       period           : 6,
       group            : 18,
       location         : [1,6,18]
     },
    Uuo: {
       name             : 'Ununoctium',
       atomicNumber     : 118,
       symbol           : 'Uuo',
       atomicWeight     : '268',
       block            : '',
       classification   : ['Unknown Properties'],
       naturalState     : '',
       stableStructure  : '',
       period           : 7,
       group            : 18,
       location         : [1,7,18]
     },
    La: {
       name             : 'Lanthanum',
       atomicNumber     : 57,
       symbol           : 'La',
       atomicWeight     : '138.91',
       block            : 'd',
       classification   : ['Lanthanides'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 1,
       group            : 1,
       location         : [2,1,1]
     },
    Ac: {
       name             : 'Actinium',
       atomicNumber     : 89,
       symbol           : 'Ac',
       atomicWeight     : '227',
       block            : 'd',
       classification   : ['Actinides'],
       naturalState     : 'solid',
       stableStructure  : 'FCC',
       period           : 2,
       group            : 1,
       location         : [2,2,1]
     },
    Ce: {
       name             : 'Cerium',
       atomicNumber     : 58,
       symbol           : 'Ce',
       atomicWeight     : '140.12',
       block            : '',
       classification   : ['Lanthanides'],
       naturalState     : 'solid',
       stableStructure  : 'FCC',
       period           : 1,
       group            : 2,
       location         : [2,1,2]
     },
    Th: {
       name             : 'Thorium',
       atomicNumber     : 90,
       symbol           : 'Th',
       atomicWeight     : '232.04',
       block            : '',
       classification   : ['Actinides'],
       naturalState     : 'solid',
       stableStructure  : 'FCC',
       period           : 2,
       group            : 2,
       location         : [2,2,2]
     },
    Pr: {
       name             : 'Praseodymium',
       atomicNumber     : 59,
       symbol           : 'Pr',
       atomicWeight     : '140.91',
       block            : '',
       classification   : ['Lanthanides'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 1,
       group            : 3,
       location         : [2,1,3]
     },
    Pa: {
       name             : 'Protactinium',
       atomicNumber     : 91,
       symbol           : 'Pa',
       atomicWeight     : '231.04',
       block            : '',
       classification   : ['Actinides'],
       naturalState     : 'solid',
       stableStructure  : 'TETRA',
       period           : 2,
       group            : 3,
       location         : [2,2,3]
     },
    Nd: {
       name             : 'Neodymium',
       atomicNumber     : 60,
       symbol           : 'Nd',
       atomicWeight     : '144.24',
       block            : '',
       classification   : ['Lanthanides'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 1,
       group            : 4,
       location         : [2,1,4]
     },
    U: {
       name             : 'Uranium',
       atomicNumber     : 92,
       symbol           : 'U',
       atomicWeight     : '238.03',
       block            : '',
       classification   : ['Actinides'],
       naturalState     : 'solid',
       stableStructure  : 'ORTHO',
       period           : 2,
       group            : 4,
       location         : [2,2,4]
     },
    Pm: {
       name             : 'Promethium',
       atomicNumber     : 61,
       symbol           : 'Pm',
       atomicWeight     : '145',
       block            : '',
       classification   : ['Lanthanides'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 1,
       group            : 5,
       location         : [2,1,5]
     },
    Np: {
       name             : 'Neptunium',
       atomicNumber     : 93,
       symbol           : 'Np',
       atomicWeight     : '237',
       block            : '',
       classification   : ['Actinides'],
       naturalState     : 'solid',
       stableStructure  : 'ORTHO',
       period           : 2,
       group            : 5,
       location         : [2,2,5]
     },
    Sm: {
       name             : 'Samarium',
       atomicNumber     : 62,
       symbol           : 'Sm',
       atomicWeight     : '150.36',
       block            : '',
       classification   : ['Lanthanides'],
       naturalState     : 'solid',
       stableStructure  : 'RHOM',
       period           : 1,
       group            : 6,
       location         : [2,1,6]
     },
    Pu: {
       name             : 'Plutonium',
       atomicNumber     : 94,
       symbol           : 'Pu',
       atomicWeight     : '244',
       block            : '',
       classification   : ['Actinides'],
       naturalState     : 'solid',
       stableStructure  : 'MONO',
       period           : 2,
       group            : 6,
       location         : [2,2,6]
     },
    Eu: {
       name             : 'Europium',
       atomicNumber     : 63,
       symbol           : 'Eu',
       atomicWeight     : '151.96',
       block            : '',
       classification   : ['Lanthanides'],
       naturalState     : 'solid',
       stableStructure  : 'BCC',
       period           : 1,
       group            : 7,
       location         : [2,1,7]
     },
    Am: {
       name             : 'Americium',
       atomicNumber     : 95,
       symbol           : 'Am',
       atomicWeight     : '243',
       block            : '',
       classification   : ['Actinides'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 2,
       group            : 7,
       location         : [2,2,7]
     },
    Gd: {
       name             : 'Gadolinium',
       atomicNumber     : 64,
       symbol           : 'Gd',
       atomicWeight     : '157.25',
       block            : '',
       classification   : ['Lanthanides'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 1,
       group            : 8,
       location         : [2,1,8]
     },
    Cm: {
       name             : 'Curium',
       atomicNumber     : 96,
       symbol           : 'Cm',
       atomicWeight     : '247',
       block            : '',
       classification   : ['Actinides'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 2,
       group            : 8,
       location         : [2,2,8]
     },
    Tb: {
       name             : 'Terbium',
       atomicNumber     : 65,
       symbol           : 'Tb',
       atomicWeight     : '158.93',
       block            : '',
       classification   : ['Lanthanides'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 1,
       group            : 9,
       location         : [2,1,9]
     },
    Bk: {
       name             : 'Berkelium',
       atomicNumber     : 97,
       symbol           : 'Bk',
       atomicWeight     : '247',
       block            : '',
       classification   : ['Actinides'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 2,
       group            : 9,
       location         : [2,2,9]
     },
    Dy: {
       name             : 'Dysprosium',
       atomicNumber     : 66,
       symbol           : 'Dy',
       atomicWeight     : '162.50',
       block            : '',
       classification   : ['Lanthanides'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 1,
       group            : 10,
       location         : [2,1,10]
     },
    Cf: {
       name             : 'Californium',
       atomicNumber     : 67,
       symbol           : 'Cf',
       atomicWeight     : '251',
       block            : '',
       classification   : ['Actinides'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 2,
       group            : 10,
       location         : [2,2,10]
     },
    Ho: {
       name             : 'Holmium',
       atomicNumber     : 67,
       symbol           : 'Ho',
       atomicWeight     : '164.93',
       block            : '',
       classification   : ['Lanthanides'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 1,
       group            : 11,
       location         : [2,1,11]
     },
    Es: {
       name             : 'Einsteinium',
       atomicNumber     : 99,
       symbol           : 'Es',
       atomicWeight     : '252',
       block            : '',
       classification   : ['Actinides'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 2,
       group            : 11,
       location         : [2,2,11]
     },
    Er: {
       name             : 'Erbium',
       atomicNumber     : 68,
       symbol           : 'Er',
       atomicWeight     : '167.26',
       block            : '',
       classification   : ['Lanthanides'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 1,
       group            : 12,
       location         : [2,1,12]
     },
    Fm: {
       name             : 'Fermium',
       atomicNumber     : 100,
       symbol           : 'Fm',
       atomicWeight     : '257',
       block            : '',
       classification   : ['Actinides'],
       naturalState     : 'solid',
       stableStructure  : 'UNK',
       period           : 2,
       group            : 12,
       location         : [2,2,12]
     },
    Tm: {
       name             : 'Thulium',
       atomicNumber     : 69,
       symbol           : 'Tm',
       atomicWeight     : '168.93',
       block            : '',
       classification   : ['Lanthanides'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 1,
       group            : 13,
       location         : [2,1,13]
     },
    Md: {
       name             : 'Mandelevium',
       atomicNumber     : 101,
       symbol           : 'Md',
       atomicWeight     : '258',
       block            : '',
       classification   : ['Actinides'],
       naturalState     : 'solid',
       stableStructure  : 'UNK',
       period           : 2,
       group            : 13,
       location         : [2,2,13]
     },
    Yb: {
       name             : 'Ytterbium',
       atomicNumber     : 70,
       symbol           : 'Yb',
       atomicWeight     : '173.04',
       block            : '',
       classification   : ['Lanthanides'],
       naturalState     : 'solid',
       stableStructure  : 'FCC',
       period           : 1,
       group            : 14,
       location         : [2,1,14]
     },
    No: {
       name             : 'Nobelium',
       atomicNumber     : 102,
       symbol           : 'No',
       atomicWeight     : '259',
       block            : '',
       classification   : ['Actinides'],
       naturalState     : 'solid',
       stableStructure  : 'UNK',
       period           : 2,
       group            : 14,
       location         : [2,2,14]
     },
    Lu: {
       name             : 'Lutetium',
       atomicNumber     : 71,
       symbol           : 'Lu',
       atomicWeight     : '174.97',
       block            : '',
       classification   : ['Lanthanides'],
       naturalState     : 'solid',
       stableStructure  : 'HEX',
       period           : 1,
       group            : 15,
       location         : [2,1,15]
     },
    Lr: {
       name             : 'Lawrencium',
       atomicNumber     : 103,
       symbol           : 'Lr',
       atomicWeight     : '262',
       block            : '',
       classification   : ['Actinides'],
       naturalState     : 'solid',
       stableStructure  : 'UNK',
       period           : 2,
       group            : 15,
       location         : [2,2,15]
     }
  };

  var classifications = {
    'Alkalai Metals'         : ['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr'],
    'Alkaline Earth Metals'  : ['Be', 'Mg', 'Ca', 'Sr', 'Ba', 'Ra'],
    'Lanthanides'            : ['La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu'],
    'Actinides'              : ['Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr'],
    'Transition Metals'      : ['Sc', 'Y', 'Ti', 'Zr', 'Hf', 'Rf', 'V', 'Nb', 'Ta', 'Db', 'Cr', 'Mo', 'W', 'Sg', 'Mn', 'Tc', 'Re', 'Bh', 'Fe', 'Ru', 'Os', 'Hs', 'Co', 'Rh', 'Ir', 'Mt', 'Ni', 'Pd', 'Pt', 'Ds', 'Cu', 'Ag', 'Au', 'Rg', 'Zn', 'Cd', 'Hg', 'Cn'],
    'Unknown Properties'     : ['Mt', 'Ds', 'Rg', 'Uut', 'Fl', 'Uup', 'Lv', 'Uus', 'Uuo'],
    'Post-Transition Metals' : ['Al', 'Ga', 'In', 'Tl', 'Sn', 'Pb', 'Bi', 'Po'],
    'Metalloids'             : ['B', 'Si', 'Ge', 'As', 'Sb', 'Te'],
    'Other non-metals'       : ['H', 'C', 'N', 'O', 'P', 'S', 'Se'],
    'Halogens'               : ['F', 'Cl', 'Br', 'I', 'At'],
    'Noble Gases'            : ['He', 'Ne', 'Ar', 'Kr', 'Xe', 'Rn']
    // 'Noble Gases'            : ['He', 'Ne', 'Ar', 'Kr', 'Xe', 'Rn'],
    // 'Non-metals'             : ['C', 'N', 'P', 'O', 'S', 'F', 'Cl', 'Br', 'I', 'At'],
    // 'Semi-metals'            : ['B', 'Si', 'Ge', 'As', 'Se', 'Sb', 'Te'],
    // 'Hydrogen'               : ['H'],
    // 'Rare Earths'            : ['La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu'],
    // 'Radioactive Rare Earths': ['Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr']
  };

  // var classSchema = {
  //   1: {
  //     classifications: [
  //       'Alkalai Metals',
  //       'Alkaline Earth Metals',
  //       'Lanthanides',
  //       'Actinides',
  //       'Transition Metals',
  //       'Unknown Properties',
  //       'Post-Transition Metals',
  //       'Metalloids',
  //       'Other non-metals',
  //       'Halogens',
  //       'Noble Gases'
  //     ]
  //   }
  // };

  var colors = {
    classifications: {
      'Alkalai Metals'        : {
        user: '#DECEE7',
        system: '#DECEE7'
      },
      'Alkaline Earth Metals' : {
        user: '#BDB5DE',
        system: '#BDB5DE'
      },
      'Lanthanides'           : {
        user: '#BDDECE',
        system: '#BDDECE'
      },
      'Actinides'             : {
        user: '#A5CECE',
        system: '#A5CECE'
      },
      'Transition Metals'     : {
        user: '#A5DEEF',
        system: '#A5DEEF'
      },
      'Unknown Properties'    : {
        user: '#A5DEEF',
        system: '#A5DEEF'
      },
      'Post-Transition Metals': {
        user: '#BDDE9C',
        system: '#BDDE9C'
      },
      'Metalloids'            : {
        user: '#FFF77B',
        system: '#FFF77B'
      },
      'Other non-metals'      : {
        user: '#FFDE29',
        system: '#FFDE29'
      },
      'Halogens'              : {
        user: '#FEA53C',
        system: '#FEA53C'
      },
      'Noble Gases'           : {
        user: '#F74A5A',
        system: '#F74A5A'
      }
    }
  };

  var groups = {
    1: {
      name        : {
        arabic    : ['1A','1A'],  // ['US', 'EU']
        roman     : ['IA','IA'],
        IUPAC     : ['1','1']
      },
      alias       : ['Alkali Metals'],
      elements    : ['H', 'Li', 'Na', 'K', 'Rb', 'Cs', 'Fr'],
      firstGroupRow : 1
    },
    2: {
      name        : {
        arabic    : ['2A','2A'],  // ['US', 'EU']
        roman     : ['IIA','IIA'],
        IUPAC     : ['2','2']
      },
      alias       : ['Alkali Earth Metals'],
      elements    : ['Be', 'Mg', 'Ca', 'Sr', 'Ba', 'Ra'],
      firstGroupRow : 2
    },
    3: {
      name        : {
        arabic    : ['3B','3A'],  // ['US', 'EU']
        roman     : ['IIIB','IIIA'],
        IUPAC     : ['3','3']
      },
      alias       : [''],
      elements    : [],
      firstGroupRow : 4
    },
    4: {
      name        : {
        arabic    : ['4B','4A'],  // ['US', 'EU']
        roman     : ['IVB','IVA'],
        IUPAC     : ['4','4']
      },
      alias       : [''],
      elements    : [],
      firstGroupRow : 4
    },
    5: {
      name        : {
        arabic    : ['5B','5A'],  // ['US', 'EU']
        roman     : ['VB','VA'],
        IUPAC     : ['5','5']
      },
      alias       : [''],
      elements    : [],
      firstGroupRow : 4
    },
    6: {
      name        : {
        arabic    : ['6B','6A'],  // ['US', 'EU']
        roman     : ['VIB','VIA'],
        IUPAC     : ['6','6']
      },
      alias       : [''],
      elements    : [],
      firstGroupRow : 4
    },
    7: {
      name        : {
        arabic    : ['7B','7A'],  // ['US', 'EU']
        roman     : ['VIIB','VIIA'],
        IUPAC     : ['7','7']
      },
      alias       : [''],
      elements    : [],
      firstGroupRow : 4
    },
    8: {
      name        : {
        arabic    : ['8B','8A'],    // ['US', 'EU']
        roman     : ['VIIIB','VIIIA'], //revisit this: 3 cols make up these two
        IUPAC     : ['8','8']
      },
      alias       : [''],
      elements    : [],
      firstGroupRow : 4
    },
    9: {
      name        : {
        arabic    : ['8B','8A'],    // ['US', 'EU']
        roman     : ['VIIIB','VIIIA'],
        IUPAC     : ['9','9']
      },
      alias       : [''],
      elements    : [],
      firstGroupRow : 4
    },
    10: {
      name        : {
        arabic    : ['8B','8A'],    // ['US', 'EU']
        roman     : ['VIIIB','VIIIA'],
        IUPAC     : ['10','10']
      },
      alias       : [''],
      elements    : [],
      firstGroupRow : 4
    },
    11: {
      name        : {
        arabic    : ['1B','1B'],    // ['US', 'EU']
        roman     : ['IB','IB'],
        IUPAC     : ['11','11']
      },
      alias       : [''],
      elements    : [],
      firstGroupRow : 4
    },
    12: {
      name        : {
        arabic    : ['2B','2B'],    // ['US', 'EU']
        roman     : ['IIB','IIB'],
        IUPAC     : ['12','12']
      },
      alias       : [''],
      elements    : [],
      firstGroupRow : 4
    },
    13: {
      name        : {
        arabic    : ['3A','3B'],    // ['US', 'EU']
        roman     : ['IIIA','IIIB'],
        IUPAC     : ['13','13']
      },
      alias       : [''],
      elements    : [],
      firstGroupRow : 2
    },
    14: {
      name        : {
        arabic    : ['4A','4B'],    // ['US', 'EU']
        roman     : ['IVA','IVB'],
        IUPAC     : ['14','14']
      },
      alias       : [''],
      elements    : [],
      firstGroupRow : 2
    },
    15: {
      name        : {
        arabic    : ['5a','5B'],    // ['US', 'EU']
        roman     : ['VA', 'VB'],
        IUPAC     : ['15','15']
      },
      alias       : ['pnictogens'],
      elements    : [],
      firstGroupRow : 2
    },
    16: {
      name        : {
        arabic    : ['6A','6B'],    // ['US', 'EU']
        roman     : ['VIA', '6B'],
        IUPAC     : ['16','16']
      },
      alias       : ['chalcogens'],
      elements    : [],
      firstGroupRow : 2
    },
    17: {
      name        : {
        arabic    : ['7A','7B'],    // ['US', 'EU']
        roman     : ['VIIA', 'VIIB'],
        IUPAC     : ['17','17']
      },
      alias       : ['halogens'],
      elements    : [],
      firstGroupRow : 2
    },
    18: {
      name        : {
        arabic    : ['8A','8B'],    // ['US', 'EU']
        roman     : ['VIIIA', 'VIIIB'],
        IUPAC     : ['18','18']
      },
      alias       : ['noble gases', 'inert gases'],
      elements    : [],
      firstGroupRow : 1
    }

  };

  var blocks = {
    s: {
      name        : 's-block',
      description : '',
      elements    : ['H', 'He', 'Li', 'Be', 'Na', 'Mg', 'K', 'Ca', 'Rb', 'Sr', 'Cs', 'Ba', 'Fr', 'Ra']
    },
    d: {
      name        : 'd-block',
      description : '',
      elements    : ['Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'La', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Ac', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn']
    },
    f: {
      name        : 'f-block',
      description : '',
      elements    : ['Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr']
    },
    p: {
      name        : 'p-block',
      description : '',
      elements    : ['B', 'C', 'N', 'O', 'F', 'Ne', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn', 'Uuq']
    }
  };


/* -----------------------------------------------------------------------
 * UI constants
 * sizing of page components is relative to constants to allow for
 * dynamic scaling of the table, including fonts.
 *
 * TODO: scaling algorithms require refinement. Atomic weight, for example.
 * TODO: change constant defaults to properties of default object
 * ----------------------------------------------------------------------- */

/*
  defaults = {
    schema: 1
  }

  or

  options = {
    defaults: {
      ...
    },
    user: {

    }
  }
*/
  // setup UI constants
  var SCALE_VALUE   = 26;
  var CLASS_SCHEMA  = options.schema || 1;
//  var CLASS_SCHEMA  = options.schema || defaults.schema;
// or
//  var CLASS_SCHEMA  = options[user].schema || options[defaults].schema;

  var BOX_SIZE      = options.boxSize || window.screen.availWidth/SCALE_VALUE;
  var LINE_HEIGHT   = BOX_SIZE / 90 + 'em';
  var GUTTER        = 2;
  var VERT_LEGEND   = 1;

/* --------------------------------------------------
 * Group Identifiers
 * -------------------------------------------------- */
  var US            = 0;
  var EU            = 1;
  var geoChoice     = options.geoChoice || US;
  var numberStyle   = options.numberStyle || 'IUPAC';

  for (var item in groups) {
    row     = (groups[item].firstGroupRow-1) * GUTTER + (groups[item].firstGroupRow-1) * BOX_SIZE;
    column  = parseInt(groups[item].name.IUPAC) * GUTTER + parseInt(groups[item].name.IUPAC) * BOX_SIZE;

    var groupID = new Surface({
      size: [BOX_SIZE,BOX_SIZE],
      content: groups[item].name[numberStyle][geoChoice],
      properties: {
          textAlign : options.textAlign || 'center',
          fontSize  : LINE_HEIGHT,
          lineHeight: LINE_HEIGHT,
          paddingTop: (BOX_SIZE*.75)+'px'
      }
    });

    var groupModifier = new Modifier({
      transform: Transform.translate(column,row,0)
    });

    mainContext.add(groupModifier).add(groupID);
  }

/* --------------------------------------------------
 * Periodic Table
 * -------------------------------------------------- */
  var row           = 0;
  var column        = 0;

  function createElement(element) {
    var atomicNumber    = elements[element].atomicNumber;
    var atomicWeight    = elements[element].atomicWeight;
    var symbol          = elements[element].symbol;
    var classification  = elements[element].classification;

    var elemBox = new Surface({
      size        : [BOX_SIZE,BOX_SIZE],
      content     : '<div align="right">'+atomicNumber+'</div><h2>'+symbol+'</h2>'+'<div align="right">'+atomicWeight+'</div>',
      properties  : {
          backgroundColor   : colors.classifications[classification[0]].system,
          bgColor           : '',
          textAlign         : 'center',
          fontSize          : LINE_HEIGHT,
          border            : '1px solid black',
          padding           : '5px',
          lineHeight        : LINE_HEIGHT
      }
    });

    var modifier = new Modifier({
      transform: Transform.translate(column,row,0)
    });

    mainContext.add(modifier).add(elemBox);
  }

  for (item in elements) {
    // if element belongs in main table body
    if (elements[item].location[0] === 1) {
      // each row has height of BOX_SIZE plus two pixel gutter
      row     = elements[item].period * GUTTER + elements[item].period * BOX_SIZE;
      // each column has width of BOX_SIZE plus two pixel gutter
      column  = elements[item].group * GUTTER + elements[item].group * BOX_SIZE + 15;
    }
    else {  // if element belongs in post-transition metals callout
      //TODO: section placement does not respond gracefully to gutter size changes
      row     = elements[item].period * GUTTER + (8*BOX_SIZE) + elements[item].period * BOX_SIZE;
      column  = elements[item].group * GUTTER + (2*BOX_SIZE) + elements[item].group * BOX_SIZE;
    }
    createElement(item);
  }

/* --------------------------------------------------
 * Vertical Color Legend - alpha feature
 * -------------------------------------------------- */

  // basing size on BOX_SIZE allows dynamic resizing of table
  var LEGEND_WIDTH  = BOX_SIZE * .5;
  var LEGEND_HEIGHT = BOX_SIZE * .5;

  row     = 80;
  column  = 10;

  for (var classItem in classifications) {
    var legend = new Surface({
      size      : [LEGEND_WIDTH,LEGEND_HEIGHT],
      properties: {
          backgroundColor   : colors.classifications[classItem].system,
          bgColor           : '',
          textAlign         : 'center',
          fontSize          : LINE_HEIGHT,
          border            : '1px solid black',
          padding           : '5px',
          lineHeight        : LINE_HEIGHT*1.5,
          fontWeight        : 'bold'
      }
    });

    var classModifier = new Modifier({
        transform: Transform.translate(column,row,0)
    });

    mainContext.add(classModifier).add(legend);

    row += LEGEND_HEIGHT+2;
  }

  // Adds Page Title
  var pageTitle = new Surface({
    content       : 'Periodic Table of the Elements',
    properties    : {
      fontSize    : '1em',
      fontWeight  : 'bold'
    }
  });

  var titleModifier = new Modifier({
    transform     : Transform.translate(BOX_SIZE*7,20,0)
  });

  mainContext.add(titleModifier).add(pageTitle);


/* --------------------------------------------------
 * Full-width Legend with Labels
 * -------------------------------------------------- */

/*
  LEGEND_WIDTH  = BOX_SIZE * 1.5;
  LEGEND_HEIGHT = BOX_SIZE * 1;

//  row     = 12*BOX_SIZE;
  // row     = 11.5*BOX_SIZE;
  // column  = 1.5*LEGEND_WIDTH;

  for (var classItem in classifications) {
    var legend = new Surface({
      size      : [LEGEND_WIDTH,LEGEND_HEIGHT],
      content   : classItem,
      properties: {
          backgroundColor   : colors.classifications[classItem].system,
          bgColor           : '',
          textAlign         : 'center',
          fontSize          : LINE_HEIGHT,
          border            : '1px solid black',
          padding           : '5px',
          lineHeight        : LINE_HEIGHT*1.5,
          fontWeight        : 'bold'
      }
    });

    var classModifier = new Modifier({
        transform: Transform.translate(column,row,0)
    });

    mainContext.add(classModifier).add(legend);

    column += LEGEND_WIDTH+2;
  }
*/
});
