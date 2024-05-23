"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cart_1 = __importDefault(require("../service/Cart"));
test('new card should be empty', () => {
    const cart = new Cart_1.default();
    expect(cart.items.length).toBe(0);
});
