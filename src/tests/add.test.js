const add = (a, b) => a + b;

test('Should add two numbers.', () => {
    const result = add(4, 5);

   expect(result).toBe(7);
});