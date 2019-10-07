## Table of contents
* [Intro](#Bargraph-Simulator)
* [Screenshots](#Screenshots)
* [Getting Started](#Getting-Started)
* [How to Use](#How-to-Use)
* [Ideas for Improvements](#Ideas-for-Improvements)
* [Project Emphasis](#Project-Emphasis)
* [License](#License)


# Bargraph Simulator

This project is a code challenge I completed as part of my application to a Software Engineer role on the newly acquired littleBits team at Sphero.  The app is fully responsive down to 320px (iPhone SE).

This is a single page application build in React using an SVG loader library.  It simulated the littleBits Bargraph product that displays the amount of voltage it is receiving.  This app allows the user to control the amount of milliVolts sent to the Bargraph using Coarse and Fine adjustment (increments of 100 or 1 mV) or a slider from 0 to 5000 mV.  It shows how many volts (0-5V) are being output to the Bargraph, displayed as colored rectangles representing the Bargraph LEDs.  A green LED represents one Volt while the amber represents 0 > 1 / partial Volt.


## Screenshots

### Landing screen
![Landing screen](/screenshots/1.png)

### Receiving some voltage
![Receiving some voltage](/screenshots/2.png)

### Receiving max volts
![Receiving max volts](/screenshots/3.png)

### Tablet view (iPad)
![Tablet view](/screenshots/4.png)

### Mobile view (iPhone SE)
![Mobile view](/screenshots/5.png)


## Getting Started

View the app LIVE at https://bargraph-simulator.herokuapp.com!

OR 

If you'd like to clone this repository to your own local machine, run the following command in your terminal:

```shell
git clone https://github.com/lynnerang/bargraph-svg.git
```

Then run the following command to install dependencies:

```shell
npm install
```

To view the app in action, run the following command in your terminal:

```bash
npm start
```

Then, go to `http://localhost:3000/` in your browser to see the code running in the browser.

---

## How to Use

1. On the home page, you will see the controls to the left and the littleBits Bargraph to the right.  The amount of power will default to 0 mV.
2. You can click and drag the slider up and down to any point between 0 and 5000 mV, and the LEDs on the Bargraph image will light up to show green for full volts and amber for partial power.
3. You can also click the up and down arrows on the Coarse and Fine adjustments to go up or down by 100 mV (coarse) or 1mV (fine).

## Ideas for Improvements

1. Allow users to enter an exact figure for the milliVolts.
2. Chat with electrical engineers about other potential features/upgrades I could add.
3. Add a PWM module.


## Project Emphasis

This project was an exciting opportunity for me to brush up on my knowledge of electrical hardware, experiment further with React hooks (e.g. useState), and practice testing React Hooks.

- [x] HTML & CSS 
- [x] Flex-box
- [x] UI design
- [x] Material UI
- [x] React
- [x] react-svgmt (svg loader library)
- [x] Enzyme & Jest testing
- [x] Webpack
- [x] NPM


## Licensing

All credit goes to <a href="https://littlebits.com/">littleBits</a> and <a href="sphero.com">Sphero</a> for their ownership of the <a href="https://littlebits.com/products/bargraph?_pos=1&_sid=717bafac4&_ss=r">Bargraph</a> product and specifications of this code challenge.
