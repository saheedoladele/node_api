// @ts-ignore
import { StudentStore, Student } from '../student';

const store = new StudentStore()

describe("Student Model", () => {
  it('should have an index method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a create method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a update method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a delete method', () => {
    expect(store.index).toBeDefined();
  });

  it('create method should add a student', async () => {
    // @ts-ignore
    const result = await store.create({
      firstName: 'Alao',
      lastName: 'Akala',
      dateOfbirth: '2020-01-01',
      email: 'student@gmail.com'
    });
    expect(result).toEqual({
    //@ts-ignore
      id: "1",
      firstName: 'Alao',
      lasName: 'Akala',
      dateOfBirth: '2020-01-01',
      email: 'student@gmail.com'
    });
  });

  it('index method should return a list of students', async () => {
    const result = await store.index();
    expect(result).toEqual([{
      id: 1,
      firstName: 'Alao',
      lastName: 'Akala',
      dateOfbirth: '2020-01-01',
      email: 'student@gmail.com'
    }]);
  });

  it('show method should return the correct student', async () => {
    const result = await store.show("1");
    expect(result).toEqual({
        id: 1,
        firstName: 'Alao',
        lastName: 'Akala',
        dateOfbirth: '2020-01-01',
        email: 'student@gmail.com'
    });
  });

  it('delete method should remove the student', async () => {
    store.delete("1");
    const result = await store.index()

    expect(result).toEqual([]);
  });
});