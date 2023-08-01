import supabase from './db.js';

export const insertData = async (topic1, school_class2, essay_type3, reference_piece4, additional_features5) => {
    let { data, error } = await supabase
        .from('FirstInputTable')  // Replace 'tableName' with your table's name
        .insert([
            {
                topic: topic1,
                school_class: school_class2,
                essay_type: essay_type3,
                reference_piece: reference_piece4,
                additional_features: additional_features5
            }
        ]).select();

    if (error) {
        console.log('Error: ', error);
    } else {
        console.log('Inserted data into the table.');
    }
}