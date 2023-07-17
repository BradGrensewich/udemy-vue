<template>
    <section>
        <h2>My friends</h2>
        <ul>
            <friend-contact></friend-contact>
            <friend-contact></friend-contact>
        </ul>
    </section>
</template>
<script>
export default {
    data() {
        return {
            friends: [
                {
                    id: 'brad',
                    name: 'Brad Grensewich',
                    phone: '0702519921',
                    email: 'brad@localhost.com'
                },
                {
                    id: 'vy',
                    name: 'Vy Ngo',
                    phone: '911',
                    email: 'vy@localhost.com'
                }
            ]
        }        
    }
};
</script>
<style></style>