/* 
 * Copyright (C) 2021, Alex. <xander.scorpio@gmail.com>
 * This file is part of SocialBound.
 * SocialBound is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation, either version 3 of the License, or(at your option) any later version.
 * 
 * SocialBound is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty
 * of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.See the GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License along with SocialBound. If not, see http://www.gnu.org/licenses/.
 */

const Helper = require("../Utilities/Helper");

class Mobile {
    constructor() {
        this.ARMOR = 0;
        this.ICE = 1;
        this.ADUKA = 2;
        this.LIGHTNING = 3;
        this.BIGFOOT = 4;
        this.JD = 5;
        this.ASATE = 6;
        this.RANDOM = 7;
        this.KNIGHT = 8;
        this.FOX = 9;
        this.DRAGON = 10;
        this.NAK = 11;
        this.TRICO = 12;
        this.MAGE = 13;
        this.TURTLE = 14;
        this.BOOMER = 15;
        this.ELECTRICO = 16;
        this.GRUB = 17;
        this.RAON = 18;
        this.DRAG = 19;
        this.KALSIDDON = 20;
        this.NUMBER_OF_MOBILE = 21;
    }
    GetSpecialMobile(){
        return [this.KNIGHT, this.FOX, this.DRAGON, this.ELECTRICO, this.DRAG];
    }
    GetCountSpecialMobile(){
        return this.GetCountSpecialMobile().length;
    }
    GetNormalMobile(){
        return [this.ARMOR, this.ICE, this.ADUKA, this.LIGHTNING, this.BIGFOOT, this.JD, this.ASATE, this.RANDOM, this.NAK, this.TRICO, this.MAGE, this.TURTLE, this.BOOMER, this.GRUB, this.RAON, this.KALSIDDON];
    }
    GetCountNormalMobile(){
        return this.GetNormalMobile().length;
    }
    GetAllMobile(){
        let normalMobiles = this.GetNormalMobile();
        return [...this.GetSpecialMobile(), ...normalMobiles];
    }
    GetRandomMobile(){
        let MIN_NUMBER = 0;
        let MAX_NUMBER = this.NUMBER_OF_MOBILE - 1;
        let RANDOM_NUMBER = Helper.random(MIN_NUMBER, MAX_NUMBER);
        return this.GetAllMobile()[RANDOM_NUMBER];
    }
    CheckMobile(mobile_number){
        return this.GetAllMobile().includes(mobile_number);
    }
    IsSpecial(mobile_number){
        return this.GetSpecialMobile().includes(mobile_number);
    }
}
const mobile = new Mobile();
module.exports = mobile;