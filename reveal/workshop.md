<section data-background="#34495e">

# LOI CARREZ

github.com/92bondstreet/carrez

---

<section data-background="#34495e">

## French law which obliges the vendor of a property lot to mention the surface area.

---

<section data-background="#34495e">

# real estate ad

---

<section data-background="#34495e">

# 35 m2, 50m2, 100m2...

---

<section data-background="#34495e">

# price... Good deal?

---

<section data-background="#34495e">

# meilleursagents

> Estimatation of square meter by town

---

<section data-background="#34495e">


# leboncoin.fr

> leader of classified ad

---

<section data-background="#34495e">

# Workshop in 1 sentence

> Determine if the price of a real estate on leboncoin.fr classified ad is a good deal.

---

<section data-background="#34495e">

# How to do that?

---

<section data-background="#34495e">

By creating a link between leboncoin.fr, meilleursagents.com and the end-user.

---

<section data-background="#34495e">

# Stack

```txt
node.js + NPM + Material Design (mdl, bootstrap...) + Vanilla JS
```

---

<section data-background="#16a085">

### Step 1

# Classified ad real estate definition

---

<section data-background="#16a085">


> Define the JSON schema for a real estate leboncoin.fr classified ad.

---

<section data-background="#16a085">

### Step 2

# Estimation from Meilleurs agents

---

<section data-background="#16a085">


> Define the JSON schema to compute the square meter estimation for a real estate ad.

---

<section data-background="#16a085">

### Step 3

# Connexion?

---

<section data-background="#16a085">

> Write a User Flow

---

<section data-background="#16a085">

### Step 4

```js
require('leboncoin')
```

---

<section data-background="#16a085">

> From the ad url, scrap the webpage and return the real estate properties in JSON format.

---

<section data-background="#16a085">

### Step 5

```js
require('meilleursagents')
```

---

<section data-background="#16a085">

> From a real estate ad JSON object, determine:
* price for the square meter
* if it's a good deal

---

<section data-background="#16a085">

### Step 6

```js
node app.js
```

---

<section data-background="#16a085">

> Build the Node server with Express.

---

<section data-background="#16a085">

### Step 7

# UX/UI

---

<section data-background="#16a085">

> From a leboncoin real estate ad url, compute the price by square meter and give a feedback to the user about the deal (good or not).

---

# 1 week

---

# production ?
