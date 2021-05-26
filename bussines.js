import { promises as fs } from 'fs';

const brands = JSON.parse(await fs.readFile('car-list.json'));

const returnFnOrder = (response) => {
    if (response.length == 1) {
        return [response[0].brand]
    } else {
        return response.map((brand) => brand.brand)
    }
}

export function maisModelos() {

    let max = 0;
    let response = [];

    brands.filter((brand) => {
        if (brand.models.length >= max) {
            max = brand.models.length;
            response = [];
            response.push(brand);
        } else if (brand.models.length === max) {
            response.push(brand);
        }
    });

    return returnFnOrder(response);
}

export function menosModelos() {
    let min = brands[0].models.length;
    let response = [];

    brands.filter((brand) => {
        if (brand.models.length <= min) {
            min = brand.models.length;
            response = [];
            response.push(brand);
        } else if (brand.models.length === min) {
            response.push(brand);
        }
    });

    return returnFnOrder(response);
}

export function listaMaisModelos(id) {
    let response = [];

    brands.sort((brandA, brandB) => {
        if (brandA.models.length < brandB.models.length)
            return 1;
        if (brandA.models.length > brandB.models.length)
            return -1;
        return 0;
    });

    brands.sort((brandA, brandB) => {
        if (brandA.models.length == brandB.models.length)
            return -1;
        if (brandA.models.length > brandB.models.length)
            return -1;
        if (brandA.models.length < brandB.models.length)
            return 1;
        return 0;
    });

    response = brands.slice(0, id);

    return response.map((brand) => `${brand.brand} - ${brand.models.length}`)
}

export function listaMenosModelos(id) {

    let response = [];

    brands.sort((brandA, brandB) => {
        if (brandA.models.length > brandB.models.length)
            return 1;
        if (brandA.models.length < brandB.models.length)
            return -1;
        return 0;
    });

    brands.sort((brandA, brandB) => {
        if (brandA.models.length == brandB.models.length)
            return 1;
        if (brandA.models.length > brandB.models.length)
            return 1;
        if (brandA.models.length < brandB.models.length)
            return -1;
        return 0;
    });

    response = brands.slice(0, id);

    return response.map((brand) => `${brand.brand} - ${brand.models.length}`)
}

export function listaModelos(nomeMarca) {
    const response = [];
    const marca = nomeMarca.toLowerCase();
    brands.map((brandObj) => {
        const name = brandObj.brand.toLowerCase();
        if (name.indexOf(marca) != -1) {
            response.push(brandObj);
        }
    });
    return response
}