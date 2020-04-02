const multiply = (a, b) => {
    return a * b;
};

test('trying to multiply 2 numbers', () => {
    const result = multiply(3, 4);

    expect(result).toBe(12);
});